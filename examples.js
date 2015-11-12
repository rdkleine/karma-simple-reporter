var util = require('util');
var growly = require('growly');
var path = require('path');

var MSG_SUCCESS = '%d tests passed in %s.';
var MSG_FAILURE = '%d/%d tests failed in %s.';
var MSG_ERROR = '';

var OPTIONS = {
  success: {
    dispname: 'Success',
    title: 'PASSED - %s',
    icon: path.join(__dirname, 'images/success.png')
  },
  failed: {
    dispname: 'Failure',
    title: 'FAILED - %s',
    icon: path.join(__dirname, 'images/failed.png')
  },
  error: {
    dispname: 'Aborted',
    title: 'ERROR - %s',
    icon: path.join(__dirname, 'images/error.png')
  }
};


var GrowlReporter = function(helper, logger, config) {
  var log = logger.create('reporter.growl');

  var optionsFor = function(type, browser) {
    var prefix = config && config.prefix ? config.prefix : '';
    return helper.merge(OPTIONS[type], {title: prefix + util.format(OPTIONS[type].title, browser)});
  };

  growly.register('Karma', '', [], function(error) {
    var warning = 'No running version of GNTP found.\n' +
	                'Make sure the Growl service is installed and running.\n' +
                  'For more information see https://github.com/theabraham/growly.';
    if (error) {
      log.warn(warning);
    }
  });

  this.adapters = [];

  this.onBrowserComplete = function(browser) {
    var results = browser.lastResult;
    var time = helper.formatTimeInterval(results.totalTime);

    if (results.disconnected || results.error) {
      return growly.notify(MSG_ERROR, optionsFor('error', browser.name));
    }

    if (results.failed) {
      return growly.notify(util.format(MSG_FAILURE, results.failed, results.total, time),
          optionsFor('failed', browser.name));
    }

    growly.notify(util.format(MSG_SUCCESS, results.success, time), optionsFor('success',
        browser.name));
  };
};

GrowlReporter.$inject = ['helper', 'logger','config.growlReporter'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:growl': ['type', GrowlReporter]
};
//!!----1-1-1-1-
//!!----1-1-1-1-
//!!----1-1-1-1-

var os = require('os')
var path = require('path')
var fs = require('fs')
var builder = require('xmlbuilder')

var JUnitReporter = function (baseReporterDecorator, config, logger, helper, formatError) {
  var log = logger.create('reporter.junit')
  var reporterConfig = config.junitReporter || {}
  var pkgName = reporterConfig.suite || ''
  var outputDir = reporterConfig.outputDir
  var outputFile = reporterConfig.outputFile
  var useBrowserName = reporterConfig.useBrowserName

  var suites
  var pendingFileWritings = 0
  var fileWritingFinished = function () {}
  var allMessages = []

  if (outputDir == null) {
    outputDir = '.'
  }

  outputDir = helper.normalizeWinPath(path.resolve(config.basePath, outputDir)) + path.sep

  if (typeof useBrowserName === 'undefined') {
    useBrowserName = true
  }

  baseReporterDecorator(this)

  this.adapters = [
    function (msg) {
      allMessages.push(msg)
    }
  ]

  var initliazeXmlForBrowser = function (browser) {
    var timestamp = (new Date()).toISOString().substr(0, 19)
    var suite = suites[browser.id] = builder.create('testsuite')
    suite.att('name', browser.name)
      .att('package', pkgName)
      .att('timestamp', timestamp)
      .att('id', 0)
      .att('hostname', os.hostname())

    suite.ele('properties')
      .ele('property', {name: 'browser.fullName', value: browser.fullName})
  }

  var writeXmlForBrowser = function (browser) {
    var safeBrowserName = browser.name.replace(/ /g, '_')
    var newOutputFile
    if (outputFile != null) {
      var dir = useBrowserName ? path.join(outputDir, safeBrowserName)
                               : outputDir
      newOutputFile = path.join(dir, outputFile)
    } else if (useBrowserName) {
      newOutputFile = path.join(outputDir, 'TESTS-' + safeBrowserName + '.xml')
    } else {
      newOutputFile = path.join(outputDir, 'TESTS.xml')
    }

    var xmlToOutput = suites[browser.id]
    if (!xmlToOutput) {
      return // don't die if browser didn't start
    }

    pendingFileWritings++
    helper.mkdirIfNotExists(path.dirname(newOutputFile), function () {
      fs.writeFile(newOutputFile, xmlToOutput.end({pretty: true}), function (err) {
        if (err) {
          log.warn('Cannot write JUnit xml\n\t' + err.message)
        } else {
          log.debug('JUnit results written to "%s".', newOutputFile)
        }

        if (!--pendingFileWritings) {
          fileWritingFinished()
        }
      })
    })
  }

  var getClassName = function (browser, result) {
    var browserName = browser.name.replace(/ /g, '_').replace(/\./g, '_') + '.'

    return (useBrowserName ? browserName : '') + (pkgName ? pkgName + '.' : '') + result.suite[0]
  }

  this.onRunStart = function (browsers) {
    suites = Object.create(null)

    // TODO(vojta): remove once we don't care about Karma 0.10
    browsers.forEach(initliazeXmlForBrowser)
  }

  this.onBrowserStart = function (browser) {
    initliazeXmlForBrowser(browser)
  }

  this.onBrowserComplete = function (browser) {
    var suite = suites[browser.id]
    var result = browser.lastResult
    if (!suite || !result) {
      return // don't die if browser didn't start
    }

    suite.att('tests', result.total)
    suite.att('errors', result.disconnected || result.error ? 1 : 0)
    suite.att('failures', result.failed)
    suite.att('time', (result.netTime || 0) / 1000)

    suite.ele('system-out').dat(allMessages.join() + '\n')
    suite.ele('system-err')

    writeXmlForBrowser(browser)
  }

  this.onRunComplete = function () {
    suites = null
    allMessages.length = 0
  }

  this.specSuccess = this.specSkipped = this.specFailure = function (browser, result) {
    var spec = suites[browser.id].ele('testcase', {
      name: result.description, time: ((result.time || 0) / 1000),
      classname: getClassName(browser, result)
    })

    if (result.skipped) {
      spec.ele('skipped')
    }

    if (!result.success) {
      result.log.forEach(function (err) {
        spec.ele('failure', {type: ''}, formatError(err))
      })
    }
  }

  // wait for writing all the xml files, before exiting
  this.onExit = function (done) {
    if (pendingFileWritings) {
      fileWritingFinished = done
    } else {
      done()
    }
  }
}

JUnitReporter.$inject = ['baseReporterDecorator', 'config', 'logger', 'helper', 'formatError']

// PUBLISH DI MODULE
module.exports = {
  'reporter:junit': ['type', JUnitReporter]
}

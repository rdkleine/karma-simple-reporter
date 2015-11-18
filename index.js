var util = require('util');

var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
var MOVE_UP = new Buffer('1b5b3141', 'hex').toString();
var CLEAR_LINE = new Buffer('1b5b304b', 'hex').toString();

var count = 0;
var lastMessageType = 'log';

var SimpleReporter = function (baseReporterDecorator, formatError, config) {
  baseReporterDecorator(this);

  this.onRunStart = function (browsers) {
    this._browsers = [];
    this.writeLog('Starting karma-simpler-reporter', 'log');
  }

  this.onRunComplete = function (browsers, results) {
    this.writeLog('All done!', 'log');
    if (browsers.length > 1 && !results.disconnected && !results.error) {
      if (!results.falied) {
        this.writeCommonMsg('success', results.success);
      } else {
        this.writeCommonMsg('faild', results.failed, results.success);
      }
    }
  }

  this.onBrowserStart = function (browser) {
    this.writeLog('onBrowserStart', 'log');
    this._browsers.push(browser);
  }

  this.onBrowserComplete = function (browser, result) {
    this.writeLog('onBrowserComplete', 'log');
    this.writeLog('skipped:' + result, 'log');
    // this.writeLog('success:' + result.success, 'log');
    // this.writeLog('failed:' + result.failed, 'log');
    // this.writeLog('sktotalip:' + result.total, 'log');
    // this.writeLog('totalTime:' + result.totalTime, 'log');
  }

  this.specSuccess = function () {
    count = count + 1;
    this.writeLog('Nr: ' + count, 'count');
  }

  this.specFailure = function (browser, result) {
    var msg = '\033[37;1;31merror!\033[m\n';
    msg += '\033[1;30msuite \033[1;37m' + result.suite + '\n'
    msg += '\033[1;30mdescr \033[1;37m' + result.description + '\033[m\n';
    result.log.forEach(function (log) {
      msg += formatError(log, '  ')
        .replace(/\s{2,}/g, ' ')
        .replace(/\t/g);
    })
    this.writeLog(msg, 'err');
  }

  this.writeLog = function (message, messageType) {

    switch (messageType) {
      case 'count':
        // clean previous line if it was a count line
        if (this.lastMessageType === 'count') {
          this.writeCommonMsg(MOVE_LEFT + CLEAR_LINE + MOVE_UP);
        }

        // write count
        this.writeCommonMsg(message + '\n');
        break;
      case 'err':
        // write error
        this.writeCommonMsg(message + '\n');
        break;
      default:
        // write other stuff
        this.writeCommonMsg(message + '\n');
        break;
    }
    this.lastMessageType = messageType
  }
};

// SimpleReporter.$inject = ['helper', 'logger','config.growlReporter'];

module.exports = {
  'reporter:simple': ['type', SimpleReporter]
};
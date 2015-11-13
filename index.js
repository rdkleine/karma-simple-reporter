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
  }

  this.specSuccess = function () {
    count = count + 1;
    this.writeLog('Nr: ' + count, 'count');
  }

  this.specFailure = function (browser, result) {
    var msg = '\033[31mError\033[m\n';
    msg += 'Suite: ' + result.suite + '\n'
    msg += 'Description: ' + result.description + '\n';
    msg += 'Log:\n';
    result.log.forEach(function (log) {
      msg += '|' + formatError(log, '\t')
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
        this.writeCommonMsg(messageType + ' ' + message + '\n');
        break;
    }
    this.lastMessageType = messageType
  }
};

// SimpleReporter.$inject = ['helper', 'logger','config.growlReporter'];

module.exports = {
  'reporter:simple': ['type', SimpleReporter]
};
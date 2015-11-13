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

    var msg = result.suite + '\n' + result.description + '\n';

    result.log.forEach(function (log) {
      msg += formatError(log, '\t')
    })

    this.writeLog(msg, 'err');
    //this.writeCommonMsg(msg)
  }

  this.writeLog = function (message, messageType) {
    switch (messageType) {
      case 'count':
        if (this.lastMessageType === 'count') {
          this.writeCommonMsg(MOVE_LEFT + CLEAR_LINE + MOVE_UP);
          this.writeCommonMsg('a' + message);
        } else {
          this.writeCommonMsg('b' + message);
        }
        break;
      case 'err':
        this.writeCommonMsg('\033[31mError:\033[m\n' + message);
        break;
      default:
        this.writeCommonMsg(messageType + ' ' + message + '\n');
        break;
    }
    this.lastMessageType = messageType
  }
};

// SimpleReporter.$inject = ['helper', 'logger','config.growlReporter'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:simple': ['type', SimpleReporter]
};
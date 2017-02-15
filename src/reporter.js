var SimplerReporter = require('./simplerReporter');

var reporter = function (baseReporterDecorator, formatError, config) {
  baseReporterDecorator(this);
  var simplerReporter = new SimplerReporter();
  this.onRunStart = simplerReporter.onRunStart(browsers);
  this.onRunComplete = simplerReporter.onRunComplete(browsers, results);
  this.onBrowserStart = simplerReporter.onBrowserStart(browser);
  this.onBrowserComplete = simplerReporter.onBrowserComplete(browser);
  this.specSuccess = simplerReporter.specSuccess();
  this.specFailure = simplerReporter.specFailure(browser, result);
};

module.exports = {
  'reporter:simple': ['type', reporter]
};
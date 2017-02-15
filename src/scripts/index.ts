'use strict';

var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();

class SimpleReporter  {
    constructor(formatError, config) {
        //baseReporterDecorator(this);
        // this.onRunStart = SimpleReporter.onRunStart;
        //baseReporterDecorator(this);
        //baseReportedDecorator(this)
        this = <any>this;
    }

    public onRunStart(browsers: string[]): void {
        this._browsers = [];
        
        //this.writeCommonMsg('Starting karma-simpler-reporter', 'log');
    }

}

export = { 'reporter:simple': ['type', SimpleReporter] };

// let SimpleReporter = function (baseReporterDecorator, formatError, config) {
//   baseReporterDecorator(this);

//   this.onRunStart = function (browsers) {
//     this._browsers = [];
//     this.writeLog('Starting karma-simpler-reporter', 'log');
//   }

//   this.onRunComplete = function (browsers, results) {
//     this.writeLog('All done!', 'log');
//     if (browsers.length > 1 && !results.disconnected && !results.error) {
//       if (!results.falied) {
//         this.writeCommonMsg('success', results.success);
//       } else {
//         this.writeCommonMsg('failed', results.failed, results.success);
//       }
//     }
//   }

//   this.onBrowserStart = function (browser) {
//     this.writeLog('Browser start', 'log');
//     this._browsers.push(browser);
//   }
// };


// module.exports = { 'reporter:simple': ['type', SimpleReporter] };
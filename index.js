var util = require('util');

var SimpleReporter = function(helper, logger, config) {
  this.adapters = [adapter || process.stdout.write.bind(process.stdout)]
  
  this.onRunStart = function(browsers){
    this._browsers = [];
  }
  
  this.onRunComplete = function(browsers, results){
    if(browsers.length > 1 && !results.disconnected && !results.error){
      if(!results.falied){
        this.write('success', results.success);
      } else {
        this.write('faild', results.failed, results.success);
      }
    }
  }

  this.onBrowserStart = function(browser){
    this._browsers.push(browser);
  }

  this.onBrowserComplete = function(browser, result){
  
  }  

  
  this.writeCommonMsg = function(msg){
    
  }
  
  this.specSuccess = function() {
    
  }




  this.write = function() {
    var msg = util.format.apply(null, Array.prototype.slice.call(arguments))

    this.adapters.forEach(function (adapter) {
      adapter(msg)
    })
  }
};

SimpleReporter.$inject = ['helper', 'logger','config.growlReporter'];

// PUBLISH DI MODULE
module.exports = {
  'reporter:simple': ['type', SimpleReporter]
};
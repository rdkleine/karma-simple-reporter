require('core-js/es5')
global.JSON = require('json3')
var sinon = require('sinon')
var assert = require('assert')

// var ClientKarma = require('../../client/karma')
// var ContextKarma = require('../../context/karma')
//var MockSocket = require('./mocks').Socket

var SimpleReporter = require('../index.js');

describe("SimpleReporter", function () {
    it("should construct", function () {
        formatError = sinon.spy();
        var x = new SimpleReporter(formatError,null,null); 
        //expect(x).not.toBeNull();
        var MOVE_LEFT = new Buffer('1b5b3130303044', 'hex').toString();
        assert.equal(1,1);
    });
});
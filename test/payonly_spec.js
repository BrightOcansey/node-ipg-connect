var assert = require("assert"),
	ipgconnect = require("./credentials_spec");

describe('payonly', function(){
	describe('form', function(){
		it('should return true', function(){
			assert.ok(ipgconnect.payonly.form(params));
		});
	});
});

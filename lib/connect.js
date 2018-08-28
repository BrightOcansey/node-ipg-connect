var payonly = require("./connect/payonly");
var Connect = module.exports = function(options){

this.sharedsecret = typeof options.sharedsecret !=='undefined' ? options.sharedsecret : null;
this.storeid = typeof options.storeid !== 'undefined' ? options.storeid : null;
this.successURL = typeof options.successURL !=='undefined' ? options.successURL : null;
this.failURL = typeof options.failURL !=='undefined' ? options.failURL : null;
this.domain = typeof options.sandbox !== 'undefined' && options.sandbox === true ? 'https://test.ipg-online.com/connect' : 'https://www.ipg-online.com/connect';

this.payonly = new payonly(this);

return this;

};

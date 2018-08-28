var helper = require("./helper");

var payonly = module.exports = function(options){
	this.options = options;
};

payonly.prototype.form = function (params, button) {
    html = '<form id="myform" action="'+this.options.domain+'/gateway/processing" method="post">';
    for (var key in params) {
        if (params.hasOwnProperty(key)) {
            html += '<input type="hidden" name="'+key+'" value="'+params[key]+'"/>';
        }
    }
	html += '<input type="hidden" name="storename" value="'+this.options.storeid+'"/>';
	html += '<input type="hidden" name="mode" value="payonly"/>';
	html += '<input type="hidden" name="timezone" value="Europe/London"/>';
	html += '<input type="hidden" name="txndatetime" value="'+helper.sdateFormat()+'"/>';
	html += '<input type="hidden" name="hash_algorithm" value="SHA256"/>';
	html += '<input type="hidden" name="hash" value="'+helper.generateHash(this.options.storeid, params['chargetotal'], params['currency'], this.options.sharedsecret)+'"/>';
	html += '<input type="hidden" name="responseSuccessURL" value="'+this.options.successURL+'"/>';
	html += '<input type="hidden" name="responseFailURL" value="'+this.options.failURL+'"/>';
	html += '<input type="hidden" name="txntype" value="sale"/>';
	html += '<input type="hidden" name="checkoutoption" value="combinedpage"/>';
	html += '<input type="submit" value="'+button+'" /></form>';

return html;

};

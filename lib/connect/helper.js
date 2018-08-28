var crypto = require('crypto');
var dateFormat = require('dateformat');

var helper = module.exports = function(options){
	this.options = options;
};

function sdateFormat(){
	now = new Date();
	return dateFormat(now, "yyyy:mm:dd-HH:MM:ss");
};

function generateHash(storeid, chargetotal, currency, sharedsecret){
	var buf;
	var securehash;
	var storeHash = "";

	storeHash += storeid;
	storeHash += this.sdateFormat();
	storeHash += chargetotal;
	storeHash += currency;
	storeHash += sharedsecret;
	
	buf = Buffer.from(storeHash, 'ascii').toString('hex');
	securehash = crypto.createHash('sha256').update(buf).digest('hex');
	
	return securehash;
};

module.exports.generateHash = generateHash;
module.exports.sdateFormat = sdateFormat;

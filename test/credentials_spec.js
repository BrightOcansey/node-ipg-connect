var Connect = require ('../lib/connect.js');

var ipgconnect = module.exports = new Connect({
	storeid:"5412300026",
	sharedsecret:"sharedsecret",
	successURL:"https://www.firstdata.com",
	failURL:"https://www.firstdata.com",
	sandbox:true
});

params = {
	"currency": "978",
	"chargetotal": "10.00",
};

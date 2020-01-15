First Data IPG Connect Node.js Library
=====================

This library provides developers with a simple binding for the First Data IPG Connect payment gateway.

To use, download or clone the repository and install with npm.

From your Terminal/Command Line:
```
git clone https://github.com/BrightOcansey/node-ipg-connect.git
npm install node-ipg-connect
```

You can require the module and setup the Connect object with the options.

Example:

```javascript
// Require the module
var Connect = require('node-ipg-connect');

// Replace the test credentials your IPG Connect credentials

var ipg = new Connect({
    storeid: "11111111111",                     // Store Id is required, replace '11111111111' with your Store Id
    sharedsecret: "sharedsecret",             // Shared Secret is required, replace 'sharedsecert' with your Shared Secret
    successURL: "https://www.firstdata.com",   // Replace firstdata.com with your store URL to redirect customer after a succesfull payment
    failURL: "https://www.firstdata.com",      // Replace firstdata.com with your store URL to redirect customer after failed/declined payment
    sandbox: true                              // Set to 'true' for testing and 'false' for Live- Use the correct test or live credentials
});
```
Please visit the [wiki](https://github.com/BrightOcansey/node-ipg-connect/wiki/Node-IPG-Connect/) for a quick tutorial on how to build a simple IPG Connect payment app using Nodejs and Express with the node-ipg-connect module.

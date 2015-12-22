# morpheus-node-lib
A Node.JS library for interacting with the Morpheus API

## Installation
```npm install morpheus-node-lib```

## Example
```javascript
var morpheus = require("morpheus-node-lib"); // we need to include morpheus in our script!

var url = "http://www.indire.it/wp-content/uploads/2015/08/pdf-sample.pdf"; // the URL for the file to convert
var from = "pdf"; // what to convert from
var to = "html"; // what to convert to

morpheus.convert(url, from, to, function(output) { // go convert!
	// when it's done, we log the output
    console.log(output);
});
```
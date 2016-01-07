var request = require("request"); /* we need this to send requests to the server */

module.exports = {
    /* this object becomes available inside what require() returns */

    convert: function(url, from, to, callback) {
        /* this function allows conversion of a file from one format to another */

        request({
            url: 'http://subjectrefresh.info/morpheus/api/convert', // fire off the request to the server
            qs: {													// the required query string (from, to & url)
                from: from,
                to: to,
                url: url
            },
            method: 'GET'											// method is GET
        }, function(error, response, body) {						// when it comes back...
            if (error) {
                throw error;										// why should we deal with it?
            }
            if (response.statusCode !== 200) {						// the server said we did something wrong
                callback(JSON.parse(body));
            } else {												// all good!
                callback(JSON.parse(body));
            }
        });
    }
};
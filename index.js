var mockServerClient = require('mockserver-client').mockServerClient;
mockServerClient("localhost", 1080).mockAnyResponse({
    "httpRequest": {
        "method": "GET",
        "path": "/country/mexico",
    },
    "httpResponse": {
        "statusCode": 200,
        "body": {
	    "estados": [ 
		"Jalisco",
	    	"Colima"
	]}
    }
}).then(
    function () {
        console.log("Country Mexico");
    },
    function (error) {
        console.log(error);
    }
);

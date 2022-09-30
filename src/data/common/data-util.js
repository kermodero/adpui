export var adpconn = adpconn || {};

adpconn.jwtAuthToken = "";

adpconn.getFake = function (url, callback, failureCallback) {
    var response = {
	role: "CLAIM_PROCESSOR",
	username: "robert"
    };    
    callback(response);
}

adpconn.get = function (url, callback, failureCallback) {
	fetch(url, {headers: {"Authorization" : adpconn.jwtAuthToken} }).
	then(function(response) {
		if (!response.ok) {
			console.log("response was not ok.")
			//failureCallback(response);
			return null;
		}
		var headers = response.headers;
		adpconn.jwtAuthToken = headers.get("Authorization");
		return response.json();
	})
	.then(function(response) {
		if (response == null)
			return;
		console.log("got response", response);
		callback(response);
	});	
}

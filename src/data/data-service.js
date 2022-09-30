import { adpconn } from '@/data/common/data-util.js'
export  var adpds = adpds || {}

adpds.jwtAuthToken = "";
adpds.baseURL = "http://localhost:9086/adpr/rs";
//adpds.authenticate = adpds.baseURL + "/auth/authenticate";
adpds.authenticate = adpds.baseURL + "/auth/login";
adpds.totpAuthenticate = adpds.baseURL + "/auth/totpauthenticate";
adpds.signup = adpds.baseURL + "/auth/signup"; //"/auth/signup/{username}/{password}/{email}";
adpds.claimUrl = adpds.baseURL + "/d0/claim";

adpds.login = function (username, password, callback, failureCallback) {
	console.log("user/pw", username, password);
	var url = adpds.authenticate 
	url += "/" + username;
	url += "/" + password;
	callback(username, password)
}

adpds.claims = function (filters, callback) {
	var url = adpds.claimUrl 	
	console.log("calling claims? " + url);
	adpconn.get(url, callback, null);
};


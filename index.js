
var _ = require('underscore');
var https = require('https');
var crypto = require('crypto');
var url = require('url');
var urlencode = require('urlencode');

var opendatanode = function(host,version,key,secret,verbose) {
	this.verbose = verbose || false;
	this.version = "0.0.1";
	this.key = key;
	this.secret = secret;
	this.host = host;
	// this.host="examples.opendatasoft.com";
	this.uri = "/api/datasets/"+version+"/";
	this.baseURL = "https://opendata.bruxelles.be/";
	this.userAgent = "opendatanode-node";
	this.request_options = {
		method: 'GET',
		headers: {
			"User-Agent": "opendatanode-node",
			"Content-Type": "application/x-www-form-urlencoded"
		}
	}
};


opendatanode.prototype.search = function(q,lang,rows,refinetype,refine,callback) {
	var params="search/?";
	if(refine !== "" && refinetype !== ""){
		params=params+'refine.'+refinetype+'='+refine+'&';
	}else{
		params='search/?';
	} 
	if(lang !== ""){
		params=params+'lang='+lang;
	}if(q !== ""){
		params=params+'&q='+q;
	}if(rows !== ""){
		params=params+'&rows='+rows;
	}
	console.log("params",params);		

	this.pubRequest(params, {}, function(err, data) {
		return callback(err, data);
	});
}


opendatanode.prototype.pubRequest = function(method, params, callback) {
	var options = {
	  hostname: this.host,
	  path: this.uri + method,
	  port: 443,
	  method: 'GET',
	  verbose: this.verbose
	};
	console.log(options.path);
	cb = function(response) {
		if (response.statusCode < 200 || response.statusCode > 299) {
		   callback(response.statusCode);
		 }
		if(response.statusCode==200){
		var str = '';
		response.on('data', function (chunk) {
			str += chunk;
			if (options.verbose) console.log(str);
		});


		response.on('end', function () {
			var objFromJSON;
			try {
				objFromJSON = JSON.parse(str);
				return callback(null, objFromJSON.datasets);
			}
			catch (err) {
				return callback(err, null);
			}
		});
		}
	}
	var req = https.request(options, cb);
	req.on('error', function(err) {
		callback(err.status, null);
	});

	req.end();

};






module.exports = opendatanode;

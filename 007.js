var url = process.argv[2];

var http = require('http');

http.get(url, function(response) {
	response.setEncoding("utf8");
	response.on("data", console.log);
	response.on('error', console.error);
});

var url = require('url');
var http = require('http');

var portNumber = process.argv[2];

var server = http.createServer(function(request, response) {

	var parsedURL = url.parse(request.url, true);
	var dateQuery = parsedURL.query.iso;
	var date = new Date(dateQuery);

	var result;
	if (parsedURL.pathname === "/api/parsetime") {
		result = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second":date.getSeconds()
		};
	}
	else if (parsedURL.pathname === "/api/unixtime") {
		result = {
			"unixtime": date.getTime()
		};
	}

	if (result) {
		response.writeHead(200, { 'Content-Type': 'application/json' });
		return response.end(JSON.stringify(result));
	}

	response.writeHead(404);
	response.end();

});
server.listen(portNumber);

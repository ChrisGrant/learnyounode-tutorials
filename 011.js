var http = require("http");
var fs = require("fs");

var portNumber = process.argv[2];
var filePath = process.argv[3];

var server = http.createServer(function(request, response) {
	response.writeHead(200, { 'content-type': 'text/plain' })

	var stream = fs.createReadStream(filePath);
	stream.pipe(response);


});
server.listen(portNumber);

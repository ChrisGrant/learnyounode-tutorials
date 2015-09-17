var fs = require('fs');

var filePath = process.argv[2];

fs.readFile(filePath, function(err, data) {
	var contents = data.toString();
	var newlineCount = contents.split(/\r\n|\r|\n/).length - 1;
	console.log(newlineCount);
});

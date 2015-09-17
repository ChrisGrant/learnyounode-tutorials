var fs = require('fs');
var path = require('path');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

fs.readdir(filePath, function(err, list) {
	for (var i = 0; i < list.length; i++) {
		var file = list[i];
		var extName = path.extname(file);
		if (extName === "."+fileExtension) {
			console.log(file);
		}
	}
});

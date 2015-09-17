module.exports = function(filePath, fileExtension, callback) {

	var fs = require('fs');
	var path = require('path');

	var data = [];

	fs.readdir(filePath, function(err, list) {
		if (err) {
			return callback(err, list);
		}

		for (var i = 0; i < list.length; i++) {
			var file = list[i];
			var extName = path.extname(file);
			if (extName === "."+fileExtension) {
				data.push(file);
			}
		}

		callback(null, data);
	});

};

var filterFunction = require('./006-module');

var filePath = process.argv[2];
var fileExtension = process.argv[3];

filterFunction(filePath, fileExtension, function(err, list){

	if (err) {
		console.log('There was an error ' + err);
	}

	for (var i = 0; i < list.length; i++) {
		var file = list[i];
		console.log(file);
	}

});

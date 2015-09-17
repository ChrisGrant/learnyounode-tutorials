var bl = require('bl')
var http = require('http');

var url = process.argv[2];

http.get(url, function(response) {

	response.pipe(bl(function (err, data) {
		if (err) {
      return console.error(err)
		}

		var dataString = data.toString();
		console.log(dataString.length)
		console.log(dataString);
	}));

});

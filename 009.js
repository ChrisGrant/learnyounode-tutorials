var bl = require('bl')
var http = require('http');

var url1 = process.argv[2];
var url2 = process.argv[3];
var url3 = process.argv[4];

var entries = {};

function checkComplete() {
	if (entries['0'] && entries['1'] && entries['2']) {
		console.log(entries['0']);
		console.log(entries['1']);
		console.log(entries['2']);
	}
}

function storeURLAtIndex(url, index) {
	http.get(url, function(response) {
		response.pipe(bl(function (err, data) {
			if (err) {
	      return console.error(err)
			}
			entries[index] = data.toString();
			checkComplete();
		}));
	});
}

storeURLAtIndex(url1, '0');
storeURLAtIndex(url2, '1');
storeURLAtIndex(url3, '2');

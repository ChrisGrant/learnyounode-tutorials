Date.prototype.getMonthFormatted = function() {
    var month = this.getMonth() + 1;
    return month < 10 ? '0' + month : '' + month; // ('' + month) for string result
}

var net = require("net");

var portNumber = process.argv[2];

var server = net.createServer(function (socket) {
	var date = new Date();
	var dateString = date.getFullYear() +"-"+ date.getMonthFormatted() +"-"+ date.getDate() +" "+ date.getHours() +":"+ date.getMinutes();
	socket.end(dateString);
	console.log("")
});
server.listen(portNumber);

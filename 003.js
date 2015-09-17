var fs = require('fs');

var filePath = process.argv[2];

var contents = fs.readFileSync(filePath).toString();

var newlineCount = contents.split(/\r\n|\r|\n/).length - 1;

console.log(newlineCount);

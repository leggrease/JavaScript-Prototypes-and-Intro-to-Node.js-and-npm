var fs = require('fs');

var buf = fs.readFileSync(process.argv[2]);
var str = buf.toString()
var newLines = str.split('\n')
console.log(newLines.length - 1)
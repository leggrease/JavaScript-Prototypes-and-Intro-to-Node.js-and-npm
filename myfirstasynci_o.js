var fs = require('fs');

var buf = fs.readFile(process.argv[2], function(err, data){
	if (err) throw err;
	var str = data.toString();
	var newLines = str.split('\n');
	console.log(newLines.length - 1);

});

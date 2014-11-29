var fs = require('fs');
var path = require('path');

var files = fs.readdir(process.argv[2], function(err, files) {
	if (err) throw err;
	files.forEach(function(file) {
		var fileext = path.extname(file);
		if (fileext == '.' + process.argv[3])
			console.log(file);
	});
});
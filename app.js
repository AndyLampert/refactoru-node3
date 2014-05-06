// including filesystem core module
var fs = require('fs');

// old blocking, synchronous method
// var fileContents = fs.readFileSync('text.txt');
// 
// now it is setup so the header and send are executed 
// AFTER the file is read

var express = require('express');
var app = express();

// var arr = [];

app.get('/:filename', function(req, res) {
	// look for stuff only in the /public folder
	fs.readFile('./public/' + req.params.filename, function(err, data){
		res.header('Content-Type', 'text/html');
		res.send(data);
	});
});

// req.params.filename
// object that contains pieces of the url that start with :

var server = app.listen(3021, function() {
	console.log('Express server listening on port ' + server.address().port);
});

// Modify your route to allow the user to request any file by name. 
// Files should be read from the 'public' folder. For example, http://localhost:PORT/data1.txt should respond with the contents of MYPROJECT/public/data.txt.

// app.get('/:filename', function(req, res) {
 // access value of :filename with req.params.filename
 // read the file with the specified filename
 // send the contents of the file to the user
// });
// including filesystem core module
var fs = require('fs');
var fileContents = fs.readFileSync('text.txt');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.header('Content-Type', 'text/plain');
	res.send(fileContents);
});

var server = app.listen(3021, function() {
	console.log('Express server listening on port ' + server.address().port);
});

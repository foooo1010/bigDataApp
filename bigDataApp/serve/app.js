var express = require('express');
var app = express();
var config = require("./config");
var tcCtrl = require("./ctrl/tcCtrl");

config.init(app)
tcCtrl(app)
app.get('/', function(req, res) {
	res.send('Hello World!');
});


app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});
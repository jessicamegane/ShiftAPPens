var express = require('express');
var bodyParser = require('body-parser');

var libs = require('./functionals/libs');
var database = require('./functionals/database');

var server_port = 8080;
var server_ip_address = '127.0.0.1';
var app = express();

var files = libs.files(__dirname + '/controllers');
var handlers = libs.handlers(files, "../controllers/");

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.post("/api", function(req, res) {
    var handler = handlers[req.body.lib][req.body.action];

    if (handler)
        handler(req, res);
    else
        res.sendStatus(500);
});

app.listen(server_port, server_ip_address, function () {
    database.connect(/*link*/, files);

    console.log( "Listening on " + server_ip_address + ", port " + server_port )
});


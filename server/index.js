const fs = require('fs');
const CONFIG = JSON.parse(fs.readFileSync(__dirname + '/config.json', 'utf-8'))
const express = require('express');
const bodyParser = require('body-parser');
const libs = require('./functionals/libs');
const database = require('./functionals/database');
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

app.listen(CONFIG.port, CONFIG.address, function () {
    // database.connect("mongodb://localhost:27017/shiftappens", files);

    console.log("Listening on " + CONFIG.address + ", port " + CONFIG.port)
});

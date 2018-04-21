var express = require('express');
var bodyParser = require('body-parser');

var server_port = 8080;
var server_ip_address = '127.0.0.1';
var app = express();

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

const handlers = {
    users: {
        add (req, res) {
            console.log(req.body.data);
        }
    }
}

app.post("/api", function(req, res) {
    var handler = handlers[req.body.lib][req.body.action];

    if (handler)
        handler(req, res);
    else
        res.sendStatus(500);
});

app.listen(server_port, server_ip_address, function () {
    console.log( "Listening on " + server_ip_address + ", port " + server_port )
  });


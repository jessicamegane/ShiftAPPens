const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const server_ip_address = '127.0.0.1';
const server_port = 8080;
const controller_folder = __dirname + '/controllers/'
var app = express();


app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

var handlers = [];
const controllers = fs.readdirSync(controller_folder)
                      .map(f => f.replace('.js', ''));

controllers.forEach(controller => {
  handlers[controller] = require(controller_folder + controller);
});

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


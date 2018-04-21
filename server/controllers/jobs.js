// Job.js

var db = require("../functionals/database");

exports.add = function(req, res) {
    console.log(req.body.data);
    db.libs.jobs.insert(req.body.data, {w:1}, function(err) {
        if (err) res.send(err);
        else res.send("Heyo");
    });    
}
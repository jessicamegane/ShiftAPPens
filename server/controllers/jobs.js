// Job.js
<<<<<<< HEAD

var db = require("../functionals/database");

exports.add = function(req, res) {
    console.log(req.body.data);
    db.libs.jobs.insert(req.body.data, {w:1}, function(err) {
        if (err) res.send(err);
        else res.send("Heyo");
    });    
=======
var db = require('../functionals/database')

exports.add = function(req, res) {
    new_user = req.body.data;

    console.log(new_user);
    console.log(db.libs)
>>>>>>> 240a12da03a50dee923b15a77a82f008a1d418dc
}
// Job.js
var db = require('../functionals/database')

exports.add = function(req, res) {
    new_user = req.body.data;

    console.log(new_user);
    console.log(db.libs)
}
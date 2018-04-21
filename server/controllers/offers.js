var db = require('../functionals/database');

exports.add = function(req, res) {
    db.insert(req.body.lib, req.body.data.item, function(err){
        if (err) res.send(err).status(400);
        else res.send(200);
    })
}

exports.update = function(req, res) {
    db.update(req.body.lib, req.body.data.key, function(err, result){
        if (err) res.send(err).status(400);
        else if (!result) res.send(404);
        else res.send(result).status(200);
    })
}
var MongoClient = require('mongodb').MongoClient;

var libs = {}

exports.connect = function(link, req_libs) {
    MongoClient.connect(link, function(err, db) {
        if (err) return console.log(err);
        for (lib in req_libs) libs[lib] = db.collection(lib);
    });
}
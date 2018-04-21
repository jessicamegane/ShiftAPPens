var MongoClient = require('mongodb').MongoClient;

var libs = {};

exports.connect = function(url, req_libs) {
    MongoClient.connect(url, function(err, db) {
        if (err) return console.log(err);
        for (lib of req_libs) libs[lib] = db.collection(lib);
    });
}

exports.libs = libs;
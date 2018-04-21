var MongoClient = require('mongodb').MongoClient;

exports.libs = {}

exports.connect = function(url, req_libs) {
    MongoClient.connect(url, function(err, db) {
        if (err) return console.log(err);
        for (lib in req_libs) {
            console.log(lib);
            libs[lib] = db.collection(lib);
        }
    });
}
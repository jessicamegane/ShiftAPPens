var MongoClient = require('mongodb').MongoClient;

var libs = {};

exports.connect = function(url, req_libs) {
    MongoClient.connect(url, function(err, db) {
        if (err) return console.log(err);
<<<<<<< HEAD
        for (lib of req_libs) libs[lib] = db.collection(lib);
=======
        for (lib in req_libs) {
            console.log(lib);
            libs[lib] = db.collection(lib);
        }
>>>>>>> 240a12da03a50dee923b15a77a82f008a1d418dc
    });
}

exports.libs = libs;
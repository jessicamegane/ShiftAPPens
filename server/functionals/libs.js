var fs = require('fs');

exports.files = function(dir) {
    return fs.readdirSync(dir).map(f => f.replace('.js', ''));
}

exports.handlers = function(files, dir) {
    var handlers = {}
    for (name of files) handlers[name] = require(dir + name);
    return handlers;
}
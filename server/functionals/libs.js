var fs = require('fs');

exports.files = function(dir) {
    return fs.readdirSync(dir).map(f => f.replace('.js', ''));
}

exports.handlers = function(files, dir) {
    return files.reduce((acc, curr) => { acc[curr] = require(dir + curr); return acc; }, {});
}
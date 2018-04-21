// Job.js
exports.add = function(req, res) {
    console.log(req.body.data);
    res.send("Heyo");
}
// Users.js
module.exports = {
  add: function (req, res) {
    console.log(req.body.data);
    res.send("Added user mockup");
  }
};
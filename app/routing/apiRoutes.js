var friendsData = require("../data/friends");

module.exports = function(app) {

  app.get("/data/friends", function(req, res) {
    res.json(friendsData);
  });
}

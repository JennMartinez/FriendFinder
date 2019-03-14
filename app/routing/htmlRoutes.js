// Dependency //
var path = require("path");

// GET Routes //
module.exports = function(app) {
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/survery.html"));
    visitorCount++;
  });
  
  app.get(function(req, res) {
    res.sendFile(path.join(__dirname, "/home.html"));
});
};

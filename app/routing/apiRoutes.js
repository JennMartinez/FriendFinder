// Dependency //
var path = require("path");

// Variable for Data File //
var participants = require("../data/friends.js");

// GET and POST Routes //
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(participants);
});

app.post("/api/friends", function(req, res) {
    


});
};
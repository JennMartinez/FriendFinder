// Dependency //
var path = require("path");

// Variable for Data File //
var participants = require("../data/friends.js");

// GET and POST Routes //
module.exports = function(app) {
app.get("/api/friends", function(req, res) {
    res.json(participants);
});

// Determines results from the survery based on the request from user response //
app.post("/api/friends", function(req, res) {
    var userAnswers = req.body.scores;
    var comparison = [];
    var totalDifference = 0;
    var friendMatch = 0;
    
    for (var i = 0; i < participants.length; i++) {
        for (var j = 0; j < userAnswers.length; j++) {
            var scoring = Math.abs(participants[i].scores[j] - userAnswers[j]);
            totalDifference += scoring;
        }
        comparison.push(totalDifference);
    }
    for (var i = 0; i < comparison.length; i++) {
        if (comparison[i] <= comparison[friendMatch]) {
            friendMatch = i;
        }
    }
    res.json(participants[friendMatch]);
    participants.push(req.body);
  });
};
// Dependency //
var path = require("path");

// Variable for Data File //
var participants = require("../data/friends.js");

// GET and POST Routes //
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(participants);
    });

    // Determines results from the survery based on the request from user response //
    app.post("/api/friends", function (req, res) {
        var friendMatch = { name: "", photo: "", comparison: 100 }
        var userAnswers = req.body;
        console.log(req.body);
        var totalDifference = 0;

        for (var i = 0; i < participants.length; i++) {
            totalDifference = 0;
            for (var j = 0; j < participants[i].scores.length; j++) {
                var scoring = Math.abs(userAnswers.scores[j] - participants[i].scores[j]);
                totalDifference += scoring;

                if (totalDifference <= friendMatch.comparison) {
                    friendMatch.name = participants[i].name,
                        friendMatch.photo = participants[i].photo,
                        friendMatch.comparison = totalDifference
                }
            }
        }
        res.json(friendMatch);
        participants.push(userAnswers);
    });
};
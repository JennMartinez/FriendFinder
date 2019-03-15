// Dependencies //
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

// Express App and port for Local Host //
var app = express();
var PORT = process.env.PORT || 3000;

// Routes to extract data //
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Sets bodyParser to handle data parsing //
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json"}));

// Starts the server to listen on PORT //
app.listen(PORT, function() {
    console.log("Love Finder listening on PORT " + PORT);
});
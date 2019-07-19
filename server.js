
var express = require("express");
var app = express();
var bodyParser = require('body-parser')
var path = require("path");
var PORT = process.env.PORT || 8081;

 

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});


var express = require("express");
//==============================================================================

// Tells node that we are creating an "express" server
var app = express();
var bodyParser = require('body-parser');
var path = require("path");

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 8081;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({type: 'application/vnd.custom-type'}));

app.use(bodyParser.text({type: 'text/html'}))

require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);



app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

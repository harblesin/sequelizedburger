//Imports the express module
var express = require("express");

//Places the express module into the app variable
var app = express();

//Defines the port we are using
var PORT = process.env.PORT || 8080;

var db = require("./models");

//Pulls in the express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Pulls in handlebars module
var exphbs = require("express-handlebars");

//Sets the engine express will use to handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Pulls in the routes from the burger_controller.js exports
//var routes = require("./controllers/burgers_controller.js");

require("./controllers/burgers_controller.js")(app);
require("./controllers/customer_controller.js")(app);

//Tell express to use said imported routes
//app.use(routes);

//Tell the server which folder to look at for static files
app.use(express.static(__dirname + '/public'));

//Starts up the server listening to the defined port
db.sequelize.sync({force:true}).then(function(){
  app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
  });
  
})

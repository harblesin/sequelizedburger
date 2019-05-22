//Pulls in the express module and the burger object using the ORM
var express = require("express");
var burger = require("../models/burger.js");

//Sets the express method Router() to the variable router
//for repeated use
var router = express.Router();

//Sets the default empty url endpoint route to execute
//the selectAll function through the ORM, passing the results
//into the index handlebars, populating the page
router.get("/", function(req,res){
    console.log("Routed");
    burger.selectAll(function(data){
        var object = {
            burgers: data
        };
        res.render("index", object);
    });
});

//Sets the route for the POST request, passing the results once again back
//as a json, and reloading the page location
router.post("/api/burger", function(req,res){
    burger.createBurger(
        req.body.burger_name, false
    , function(results){
        res.json(results)
        console.log("successful post");
    });
});

//Sets the PUT request route, passing the id of the item from the database
//the element its attached to into the req.params, so that it can be
//targeted using the PUT request, updating the database.
//(Sorry if that was convoluted)
router.put("/api/burger/:id", function(req, res){
    burger.eatBurger(
        req.body.devoured,
        req.params.id,
        function(results){
            res.json(results)
            console.log("successful put");
        });
});

//Much like the PUT route, this DELETE route passes in the req.params,
//which is the id of the clicked element, and deleted the corresponding entry
//within the database
router.delete("/api/burger/:id", function(req,res){
    burger.trashBurger(
        req.params.id,
        function(results){
            res.json(results);
            console.log("Burger thrown in the trash!")
        });
});

//Exports the express router method variable
module.exports = router;
//Pulls in the models folder for later use
var db = require("../models");

//Sets the express method Router() to the variable router
//for repeated use
//var router = express.Router();

module.exports = function(app) {

//Sets the default empty url endpoint route to execute
//the selectAll function through the ORM, passing the results
//into the index handlebars, populating the page
app.get("/", function(req,res){
    console.log("Routed");
    db.burger.findAll({order: [['burger_name', 'ASC']
    ], include: [db.customer]}).then(function(data){
        res.render("index", {
            burgers: data});
    });
});

//Sets the route for the POST request, passing the results once again back
//as a json, and reloading the page location
app.post("/api/burger", function(req,res){
    db.burger.create({
        burger_name: req.body.burger_name
    }).then( function(results){
        res.json(results)
        console.log("successful post");
    });
});

//Sets the PUT request route, passing the id of the item from the database
//the element its attached to into the req.params, so that it can be
//targeted using the PUT request, updating the database.
//(Sorry if that was convoluted)
app.put("/api/burger/:id", function(req, res){
    db.burger.update({
        devoured: req.body.devoured},
        {where:{id:req.params.id}})
        .then(function(results){
            res.json(results)
            console.log("successful put");
        });
});

//Much like the PUT route, this DELETE route passes in the req.params,
//which is the id of the clicked element, and deleted the corresponding entry
//within the database
app.delete("/api/burger/:id", function(req,res){
    db.burger.destroy({where:{id: req.params.id}})
        .then(function(results){
            res.json(results);
            console.log("Burger thrown in the trash!")
        });
});

//Exports the express router method variable

}
//module.exports = router;
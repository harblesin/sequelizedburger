var db = require("../models");

module.exports = function(app){

    app.get('/', function(){
        db.customer.findAll().then(function(results){
            res.render("index", {
                customers: results
            })
        })
    })

    app.get("/api/customer/:id", function(req,res){
        db.customer.findOne({
            where:{
                id: req.params.id
            },
            include: [db.burger]
        }).then(function(results){
            res.json(results)
        });
    });

    app.post("/api/customer", function(req,res){
        db.customer.create({customer_name: req.body.customer_name})
        .then(function(results){
            res.json(results);
            console.log("CUSTOMER PLACED")
        });
    });

    app.delete("/api/customer/:id", function(req,res){
        db.customer.destroy({where: {id: req.params.id}})
        .then(function(results){
            res.json(results)
        })
    })


}
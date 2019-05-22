//Imports the ORM
//var orm = require("../config/orm.js");
module.exports = function (sequelize, datatypes) {
    //Begin defining the burger Object
    var burger = sequelize.define("burger", {


        burger_name: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        devoured: {
            type: datatypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })
    return burger;
}

//Continues the logic of the ORM, calling its methods
//and passing in the table name, burgers, in as the first argument,
//for each of the created ORM methods for this burger object


// selectAll: function(callback){
//     orm.selectAll("burgers", function(res){
//         callback(res)
//     });
// },

// createBurger: function(burger_name, ate, callback){
//     orm.createBurger("burgers", burger_name, ate, function(res){
//         callback(res);
//     });
// },

// eatBurger: function(ate, id, callback){
//     orm.eatBurger("burgers", ate, id, function(res){
//         callback(res);
//     });
// },

// trashBurger: function(id, callback){
//     orm.trashBurger("burgers", id, function(res){
//         callback(res);
//     });
// }

// };

// //Exports the new burger object containing the ORM methods
// module.exports = burger;
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
    });

    burger.associate = function(models) {

        burger.belongsTo(models.customer, {
            foreignKey: {
               // allowNull:false
            }
        });
    };
    return burger;
}

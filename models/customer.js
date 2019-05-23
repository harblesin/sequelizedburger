module.exports = function(sequelize, datatypes){
    var customer = sequelize.define("customer", {
        customer_name: {
            type: datatypes.STRING,
            allowNull: false,
            validate: {
                len: [1,20]
            }
        }
    });

    customer.associate = function(models) {
        customer.hasMany(models.burger, {
            onDelete: "CASCADE"
        });
    };
    
    return customer;
}
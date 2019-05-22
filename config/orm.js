//Imports the connection to the database from connection.js as variable connection.
var connection = require("./connection.js");

// //The start of our homemade ORM object, containing the functions we will use
// //to query the database
// var orm = {

//     //The first function is a general query grabbing everything in the table and sending it back up
//     //the callback chain
//     selectAll: function (table, callback) {
//         var query = "SELECT * FROM " + table + ";";
//         connection.query(query, function (err, results) {
//             if (err) {
//                 throw err
//             };
//             callback(results);
//         });
//     },

//     //This function executes an update query, simply changing the boolean within the 
//     //database on the appropriate row to true
//     eatBurger: function (table, ate, id, callback) {
//         var query = "UPDATE " + table + " SET devoured = " + ate + " WHERE id = ?";
//         connection.query(query, id, function (err, results) {
//             if (err) {
//                 throw err
//             };
//             callback(results);
//         });
//     },

//     //Executes a query to enter a new row into the db, with the columns being
//     //burger_name, and the ate boolean, and the values entered being passed in as
//     //arguments
//     createBurger: function (table, burger_name, ate, callback) {
//         var query = "INSERT INTO " + table + "(burger_name, devoured) VALUES (?,?) ";
//         connection.query(query, [burger_name, ate], function (err, results) {
//             if (err) {
//                 throw err
//             };
//             callback(results);
//         });
//     },

//     //Removes an item from the db using the id passed in as the parameter
//     trashBurger: function (table, id, callback) {
//         var query = "DELETE FROM " + table + " WHERE id = ?";
//         connection.query(query, id, function (err, results) {
//             if (err) {
//                 throw err
//             };
//             callback(results);
//         });
//     }
// };

// //Exports the ORM object
// module.exports = orm;
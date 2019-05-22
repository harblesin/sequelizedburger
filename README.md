# Burgerlogger
## Burger logger with MySQL, Node, Express, Handlebars and a homemade ORM

### Operating using all of the CRUD functions, this application has clear working buttons executing mysql queries into a deployed database, with routing through express and node, by way of a homemade ORM, with all returning data being displayed on the page using handlebars.

>## 'C' RUD
#### Styled through bootstrap the first function of the CRUD operations takes its form by way of form, allowing the user to name a new Burger, launching POST request, and putting the string entered into the mysql database with a default boolean of false

>## C 'R' UD
#### Taking a step back, the Read portion of the CRUD operations is delivered upon load, as the default route of the app brings launches a GET request, generically grabbing all data within the databse and returning it via handlebars, populating the page.

>## CR 'U' D
#### Next in line is UPDATE, allowed through a button generated upon every returned item within the database from the GET request. Clicking any of these buttons, which have been assigned the IDs corresponding to the items they were generated alongside, will launch a PUT request, using said ID as a reference to target the appropriate item in the database, flipping the boolean within to true. A reload causes the repeated GET request on load to let handlebars display it into its new position

>## CRU 'D'
#### Lastly is the DELETE. Much like update, upon boolean flip and relocation, each item is attached to a new button, one which upon clicking will launch a DELETE request, once again using the same ID that hasn't changed, removing it from the database.

>#### This readme is much more of an essay than it is organized, and I hope it is helpful. This is a straightforward program making use of routes and MYSQL queries, further dissection can be found in the comments

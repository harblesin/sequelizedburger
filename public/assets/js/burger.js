//Logic for the html buttons



//Places logic of creating burger button inside a function for purpose
//of input validation, can't create a burger with empty string
function validated() {

    //Creates an object containing the text entered into the field
    //as a string, and a value pair of false for the devoured boolean.
    var burger = {
        burger_name: $("#newBurger").val().trim()
    };

    //Passes the object into the AJAX PUT request
    $.post("api/burger", burger, function () {
        console.log("Created new burger");
        location.reload();
    });
};

//Logic for the button attached to the input field
$("#addBurger").click(function (event) {
    event.preventDefault();

    //Checks for an empty string
    if ($("#newBurger").val().trim() == "") {
        alert("Well hey, hold on! Your burgers gotta have a name, big guy!");
    }

    //Checks if the burger name is less than 30 characters
    else if ($("#newBurger").val().trim().length > 30) {
        alert("Settle down there, big fella! Your burger needs a shorter name!");
    } else {
        validated();
    }

});


//Logic for the buttons created by the GET, inside the handlebars
//for each item in the database
$('.eatBurger').click(function (event) {
    event.preventDefault();
    var clicked = false;

    //Grabs the id integer value and puts it into
    //the variable id for the API endpoint
    var id = $(this).data("id");

    //Creates an object containing the boolean
    //valued pair its going to change in the db
    var burger = {
        devoured: true,
        customer_name: $("#customerName").val()//"YES"//customerName
    };

    function sending() {

        //Creates the route using the id, and makes
        // an AJAX PUT request, with the value pair holding
        // object, burger, passed in
        // $.ajax("/api/burger/" + id, {
        //     method: "PUT",
        //     data: burger
        // }).then(function () {
        //     console.log("Ate borger");
        //     // location.reload();
        // });

        $.post("api/customer", burger, function () {
            console.log("added customer")
            
        })
        clicked = true;

    }

    sending();

    if(clicked){
        //location.reload();
    }
    else{return}


});

//Logic for buttons created upon PUT request, when boolean
//is flipped on corresponding database entry
$('.trashBurger').click(function (event) {
    event.preventDefault();
    console.log('Burger trashed');

    //Id as integer passed into variable once again
    var id = $(this).data("id");

    //Creating route endpoint with id value, executes
    //the AJAX DELETE method upon the id passed into
    //the endpoint by way of req.params
    $.ajax("/api/burger/" + id, {
        method: "DELETE"
    }).then(function () {
        location.reload();
    });
});
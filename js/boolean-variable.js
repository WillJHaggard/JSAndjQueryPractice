(function() {
    'use strict';
    //Create variables and assign their values
    var inStock,
        shipping;
    //Assign
    inStock = true;
    shipping = false;

    //Get the elem that has an id of stock
    var elStock = document.getElementById('stock');
    //Set class name with value of inStock variable
    elStock.className = inStock;

    //Get the element that has an id of shipping
    var elShip = document.getElementById('shipping');
    //Set class name with value of shipping variable
    elShip.className = shipping;



}) ();

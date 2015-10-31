(function() {
        'use strict';
        // Declare vars
        var price,
            quantity,
            total;


        // Assign variables to be used
        price = 5;
        quantity = 14;
        // Calculate the total by multiplying the price by quantity
        total = price * quantity;

        // Get the elem with an id of cost
        var el = document.getElementById('cost');
        el.textContent = '$' + total;

        /*
        NOTE: textContent does not work in IE8 or earlier
        You can use innerHTML, but that may cause security issues.

        */





}) ();

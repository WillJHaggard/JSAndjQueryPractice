(function() {
    'use strict';
    // Create and name the variable
    //Tell the interpreter it is in the array
    //Assign values inside the parenthesis
    var colors = new Array('white', 'black', 'custom');

    //Show the first item from the array.
    var el = document.getElementById('colors');
    el.textContent = colors[2];

}) ();

'use strict';

// - Create variable named `al` and assign the value `EPAM` to it
// - Create a function called `greet` that greets it's input parameter
//     - Greeting is printing e.g. `Greetings, dear EPAM`
//     - Prepare for the special case when no parameters are given
// - Greet `al`

var al = "EPAM";

function greet(a){
    if(a==undefined){
        a="nobody";
    }
    console.log("Greetings,dear "+a);
}
greet(al);
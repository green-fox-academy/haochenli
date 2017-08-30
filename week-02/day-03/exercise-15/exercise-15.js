'use strict';

// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the result
function sum(a){
    var sun = 0 ;
   for(var i = 0 ; i <= a ; i++){
    sun+=i;
   }
   return sun;
}
console.log(sum(4));

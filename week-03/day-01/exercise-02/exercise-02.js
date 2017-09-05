'use strict';
// Feri and his friend drinks two beers in a round. They order three times. How many beer do they drink?
// This code isn't working properly. The function should print: 'The result is 6'
// Could you find the appropriate types of the variables?
// Where can you invocate the function?


//function can be called everywhere
amountOfBeer(person);
const person = 2;

function amountOfBeer(person) {
  var i = person;


  for (let i = 0; i <= 4; i++) {//change i's type from var to let
    var j = i;//change j's type from let to var;
    
  }
  console.log('The result is:', i + j);
}


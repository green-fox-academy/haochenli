'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];


var search = fruits.map(function(element){
    let temp = 0;
    for(let i = 0 ; i < element.length ; i++){
        if(element[i] === 'e'){
            temp++;
        }
    }
    return temp;
});

console.log(search);
// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.
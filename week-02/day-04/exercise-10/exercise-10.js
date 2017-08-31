'use strict';

var students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

// create a function that takes a list of students and logs:
// - Who has got more candies than 4 candies

// create a function that takes a list of students and logs: 
//  - how many candies they have on average

function filter_candies (students){
  var result = students.filter(function(element){
    return element.candies > 4;
  });
  return result;
}

function ava_age (students){
  var count = 0 ;
  var result = students.map(function(element){
    count+=element.age;
  });
  return count/students.length;
  
}

console.log(filter_candies(students));
console.log(ava_age(students));


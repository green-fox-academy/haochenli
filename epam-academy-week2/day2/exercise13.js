'use strict';

var currentHours = 14;
var currentMinutes = 34;
var currentSeconds = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables
var remaining_time = (24-currentHours-1)*60+(60-currentMinutes-1)+((60-currentSeconds)/60);
console.log("the remaining seconds is "+remaining_time);
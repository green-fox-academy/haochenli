'use strict';

// Write a program that stores 3 sides of a cuboid as variables (floats)
// The program should write the surface area and volume of the cuboid like:
//
// Surface Area: 600
// Volume: 1000
var length=1;
var width=2;
var height=3;
var valume = length*width*height;
var surface =length*width*2+length*height*2+width*height*2; 
console.log("Surface Area is "+valume );
console.log("Volume is "+surface);
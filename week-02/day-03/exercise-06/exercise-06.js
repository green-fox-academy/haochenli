'use strict';

var lineCount = 4;

// Write a program that draws a
// triangle like this:
//
// *
// **
// ***
// ****
//
// The triangle should have as many lines as lineCount is
for(var i=1; i<=lineCount; i++){
    var side = "";
    for(var j=0;j<i;j++){
        side+="*";
    }
    console.log(side);
}
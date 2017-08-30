'use strict';

var lineCount = 4;
// Write a program that draws a
// pyramid like this:
//
//
//    * 1
//   *** 3
//  ***** 5
// ******* 7
//
// The pyramid should have as many lines as lineCount is
for(var i=1;i<=lineCount; i++){
    var side="";
    for(var j=0 ; j<=lineCount-i ; j++){
        side+=" ";
    }
    for(var j=2*i-1 ; j>0 ; j--){
        side+="*";
    }
    console.log(side);
}
'use strict';

var lineCount = 7;

var mid = lineCount/2+1;

// Write a program that draws a
// diamond like this:
//
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is
for(var i=1;i<=mid; i++){
    var side="";
    for(var j=0 ; j<=mid-i ; j++){
        side+=" ";
    }
    for(var j=2*i-1 ; j>0 ; j--){
        side+="*";
    }
    console.log(side);
}
//i = 1,2,3
var rest = lineCount-mid+1;
//console.log(rest);
for(var i= 1 ; i <= rest; i++){
    var side="";
    for(var j = 0 ; j <=i ; j++){
        side+=" ";
    }//1,2,3
    for(var j = 0 ; j < lineCount-2*i;j++){
        side+="*";
    }
    console.log(side);
}
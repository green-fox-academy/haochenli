'use strict';

var lineCount = 6;

// Write a program that draws a
// square like this:
//
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is
var side="";
for (var i = 0 ; i < lineCount ; i++){
  side+="%";
}
console.log(side);

for(var i = 0 ; i < lineCount-2; i++){
    var length = "";
    for(var j = 0 ; j < lineCount ; j++){
        if(j==0 || j==(lineCount-1)){
            length+="%";
        }else{
            length+=" ";
        }
    }
    console.log(length);
}
console.log(side);
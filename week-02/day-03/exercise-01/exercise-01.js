'use strict';

var a = 24;
var out = 0;
// if a is even increment out by one

if(a%2 ==0 )
{
    a++;
}
console.log(a);

var b = 13;
var out2 = '';
if(b >= 10 && b <= 20)
    {
        out2="Sweet!";
    }
if(out2 < 10){
    out2="More";
}
if(out2 > 20){
    out2="Less";
}
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "More!",
// if more than 20 set out2 to "Less!"

console.log(out2);

var c = 123;
var credits = 100;
var isBonus = false;
if(credits >= 50 && isBonus == false){
    c -= 2;
}
else if(credits < 50 && isBonus == false){
    c-=1;
}
else if(isBonus == true)
{
    c = c;
}
// if credits are at least 50,
// and isBonus is false decrement c by 2
// if credits are smaller than 50,
// and isBonus is false decrement c by 1
// if isBonus is true c should remain the same

console.log(c);


var d = 8;
var time = 200;
var out3 = '';

if(d%4==0 && time<=200){
    out3="check";

}
else if(time>200){
    out3="Time out";
}else
{
    out3="Run Forest Run!"
}

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"

console.log(out3);
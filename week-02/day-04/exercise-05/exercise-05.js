'use strict';
// Join the two array by matching one girl with one boy in the order array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

var girls = ["Eve","Ashley","Bözsi","Kat","Jane"];
var boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"];
var order = [];
var min =Math.min(boys.length,girls.length);
for(var i = 0;i < min; i++){

  order.push(girls[i]);
  order.push(boys[i]);
}
for(var i = 0 ; i < Math.max(boys.length,girls.length)-min ; i++){
  order.push(boys[i+min]);
} 

console.log(order);

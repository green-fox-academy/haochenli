'use strict';

// Create a Circle constructor that creates a circle object:
// it should take the circle's radius as a parameter
// it should have a "getCircumference" method that returns it's circumference
// it should have a "getArea" method that returns it's area
// it should have a "toString" method that returns it's stats as a string like:
// 'Radius: 4, Circumference: 25.132741228718345, Area: 50.26548245743669'

var Circle = function(radius){
    this.radius = radius;
    this.getCircumference = function(){
        return this.radius*3.14*2;
    };
    this.getArea = function(){
        return this.radius*3.14*this.radius;
    };
    this.toString = function(){    
        var S="Radius: "+this.radius+" Circunference: "+this.getCircumference()+" Area: "+this.getArea();
        return S;
    };


}

var myCircle = new Circle(4);
console.log(myCircle.toString());
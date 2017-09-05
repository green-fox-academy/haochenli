'use strict';
var Sharpie = function(Mycolor,Mywidth) {
    this.color = Mycolor;
    this.width = Mywidth;
    this.inkAmount = 100;
    this.use = function (){
        this.inkAmount -= this.width;
    };
}
module.exports = Sharpie;
'use strict';

const test = require('tape');
const Sharpie = require('./exercise-07.js');

test('constructor test',function(t){
    const expected = {
        color : "black",
        width : 10,
        inkAmount : 100,
        use:function(){
            this.inkAmount -= this.width;
        }
    };


    const actual =new Sharpie("black",10);
    
    t.equal(actual.color,expected.color);
    t.equal(actual.width,expected.width);
    t.equal(actual.inkAmount,expected.inkAmount);

    expected.use();
    actual.use();
    t.equal(actual.inkAmount,expected.inkAmount);
    
    t.end();
});
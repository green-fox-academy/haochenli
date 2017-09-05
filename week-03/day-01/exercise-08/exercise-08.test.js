'use strict';

const test = require('tape');
const ex8 = require('./exercise-08.js');

test('constructor test',function(t){
    const Animal1 = {
        hungerValue : 50,
        thristValue : 50
    }
    const Animal2 = {
        hungerValue : 50,
        thristValue : 50
    }
    const Animal3 = {
        hungerValue : 50,
        thristValue : 50
    }
    
    const expected = {
        slots: 3,
        list : [Animal1,Animal2,Animal3],
    };

    //------------------------------
    const Animal4 = new ex8.Animal();
    const Animal5 = new ex8.Animal();
    const Animal6 = new ex8.Animal();

    const actual = new ex8.Farm(3);
    actual.breed(Animal4);
    actual.breed(Animal5);
    actual.breed(Animal6);
    
    
    t.equal(actual.slots,expected.slots);

   

    
    t.end();
});
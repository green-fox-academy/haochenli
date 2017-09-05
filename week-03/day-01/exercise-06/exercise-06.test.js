'use strict';

const test = require('tape');
const countLetterInString = require('./exercise-06.js');

test('count the letter number in string',function(t){
    const expected = 2;
    const actual = countLetterInString('haochenli', 'h')
    t.equal(actual,expected);
    t.end();
});
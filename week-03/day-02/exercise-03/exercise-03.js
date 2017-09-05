'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(Myarr,callback){
    let temp = 0;
    for(var i = Myarr.length ; i > 0 ; i--){
        if(Myarr[i] % 2 == 0){
            temp = Myarr[i];
            break;
        }
    }
    printNumber(temp);
    
}

selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber); // should print 8
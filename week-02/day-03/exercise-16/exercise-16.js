'use strict';

// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(a){
    var fac=1;
    for (var i = 1 ; i <= a ; i++){
        fac*=i;
    }
    return fac;
}

console.log(factorio(4));
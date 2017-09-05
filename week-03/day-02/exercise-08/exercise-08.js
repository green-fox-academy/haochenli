'use strict';

function show(){
    setTimeout(function(){
        var bo = document.getElementsByTagName("body")[0];
        console.log(bo);
        var newly = document.createElement("p");
        newly.textContent = "2 second eclipse!";
        bo.appendChild(newly);},1000);
}

var butt = document.getElementsByClassName("but")[0];
console.log(butt);
butt.addEventListener("click",show);


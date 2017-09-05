'use strict';


function start(){
    var button = document.getElementsByClassName("but")[0];
    var flag = false;
    var flag2 = 0;
    setTimeout(function(){
        flag = true;
        if(flag===true || flag2>=3){
            var newly = document.createElement("p");
            newly.textContent = "5 seconds elapsed and clicked 3 times!";
            button.appendChild(newly);
        }
       
    },5000); 
    button.addEventListener("click",function(){
        flag2++;
        console.log("click");
    });
    
}

window.addEventListener('load', start);
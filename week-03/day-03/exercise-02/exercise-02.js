'use strict';
var global = 1;
var data;
var httpRequest = new XMLHttpRequest;
var character_list = document.getElementsByClassName("left");
var gender_list = document.getElementsByClassName("right");

var previous = document.getElementsByClassName("previous")[0];
var next = document.getElementsByClassName("next")[0];
var first = document.getElementsByClassName("first")[0];
var last = document.getElementsByClassName("last")[0];

function begin(flag){
    httpRequest.onreadystatechange = search;
    httpRequest.open('GET',"https://www.anapioficeandfire.com/api/characters/?page="+flag+"&pageSize=10");
    httpRequest.send();
}

function search(){
    if(httpRequest.readyState === XMLHttpRequest.DONE){
        data = JSON.parse(httpRequest.response);
        console.log(data);
        for(let i = 0 ; i < character_list.length ; i++){
            if(data[i].name === ''){
                console.log("wu ming");
                character_list.textContent = "Noname";
            }
            character_list[i].textContent = data[i].name;
            gender_list[i].textContent = data[i].gender;
        }
    }  
    //dosomething
    //console.log("haha");
}

next.addEventListener("click",function(){
    global++;    
    begin(global);
});
previous.addEventListener('click',function(){
    global--;
    begin(global);
});

first.addEventListener('click',function(){
    global=0;
    begin(global);
});
last.addEventListener('click',function(){
    global=214;
    begin(global);
});

window.addEventListener("load",function(){
            begin(1);
        }
)


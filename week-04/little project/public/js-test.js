'use strict';
var body = document.getElementsByClassName("body")[0];
var Httprequest = new XMLHttpRequest();
var data;
var inputField = document.getElementsByClassName("input")[0];
var submit = document.getElementsByClassName("submit")[0];
var CompleteButton = document.getElementsByClassName("Complete");
var DeleteButton = document.getElementsByClassName("Delete");
function onReadyStateChange(){
    
        Httprequest.onreadystatechange = getContent;
        Httprequest.open('GET','http://localhost:3001/api/todos');
        Httprequest.send();
}


function postinfo(){
    let value = inputField.value;
    Httprequest.onreadystatechange = function(){
        if(Httprequest.readyState === XMLHttpRequest.DONE){
            if (Httprequest.status === 200) {
                //window.location.reload(true);
            }
            //window.location.reload(true);    
        }
    };
    Httprequest.open('POST','http://localhost:3001/api/todos');
    //Httprequest.send();//object string
    Httprequest.setRequestHeader("Accept", "application/json");
    let obj = {
        "description" : value
    };
    console.log(value);
    Httprequest.send(obj);//object string  
}




function addEvent (data){
   submit.addEventListener('click',postinfo);
    for(let i = 0 ; i < data.length ; i++){
        CompleteButton[i].addEventListener('click' , Complete(data[i]._id));
        DeleteButton[i].addEventListener('click' , Delete(data[i]._id));
    }
}

function Complete(i){
    let index = i;
    function comCallBack(){
        Httprequest.onreadystatechange = function(){
            if(Httprequest.readyState === XMLHttpRequest.DONE){
                //window.location.reload(true);  
                if (Httprequest.status === 200) {
                    window.location.reload(true);    
                }
            };
        };
        
            Httprequest.open('PUT','http://localhost:3001/api/todos/'+index);
            //Httprequest.send();//object string
            Httprequest.setRequestHeader("Accept", "application/json");
            Httprequest.send();//object string
       
    }
    return comCallBack;
}
function Delete(i){
    let index = i;
    function DelCallBack(){
        Httprequest.onreadystatechange = function(){
            if(Httprequest.readyState === XMLHttpRequest.DONE){
                if (Httprequest.status === 200) {
                    window.location.reload(true);
                }
                //window.location.reload(true);    
            }
        };
        Httprequest.open('DELETE','http://localhost:3001/api/todos/'+index);
        //Httprequest.send();//object string
        Httprequest.setRequestHeader("Accept", "application/json");
        Httprequest.send();//object string
       
    }
    return DelCallBack;
}

function getContent() {
    
        if (Httprequest.readyState === XMLHttpRequest.DONE) {
            if (Httprequest.status === 200) {
               
                data = JSON.parse(Httprequest.response);
                console.log(data.todos);
                console.log(typeof(data.todos));
                setHtml(data.todos);     
                addEvent(data.todos);  
            }
        }
    }

function setHtml(data){
    for (let i = 0 ; i < data.length ; i++){
        let newDivPost = document.createElement('div');
        newDivPost.setAttribute("class","post");
        let newH3Tag = document.createElement('h3');
        newH3Tag.textContent = data[i].description;
        newH3Tag.setAttribute("class","title");
        let newButtonCo = document.createElement('button');
        newButtonCo.textContent = "Complete";
        newButtonCo.setAttribute("class","Complete");
        let newButtonDe = document.createElement('button');
        newButtonDe.textContent = "Delete";
        newButtonDe.setAttribute("class","Delete");
        body.appendChild(newDivPost);
        newDivPost.appendChild(newH3Tag);
        newDivPost.appendChild(newButtonCo);
        newDivPost.appendChild(newButtonDe);
    }
}



onReadyStateChange();
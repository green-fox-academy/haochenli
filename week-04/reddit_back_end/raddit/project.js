'use strict';


var postH2Tag = document.getElementsByClassName('content')[0].getElementsByTagName('h2');
var postDescriptionTag = document.getElementsByClassName('content')[0].getElementsByClassName('description');
var postVoteNumberTag = document.getElementsByClassName('content')[0].getElementsByClassName('vote_number');
var postVoteUpVoting = document.getElementsByClassName('up voting');

var postVoteDownVoting = document.getElementsByClassName('down voting');
var Httprequest = new XMLHttpRequest();
var UpHttprequest = new XMLHttpRequest();
var contentDiv = document.getElementsByClassName('content')[0];
var data;
var removeButton = document.getElementsByClassName('removeButton');

function onReadyStateChange(){

    Httprequest.onreadystatechange = getContent;
    Httprequest.open('GET','http://localhost:8080/posts');
    Httprequest.send();
}
function setColumeValue (input){
    //console.log(input);
    let size = input.length;
 
    for(let i = 0 ; i < size ; i++){
        let newDivPost = document.createElement('div');
        newDivPost.setAttribute("class","post");
        let newDivLike = document.createElement('div');
        newDivLike.setAttribute("class" , "like");
        let newDivNumeric = document.createElement('div');
        newDivNumeric.setAttribute("class" , "numeric");
        let newPNumber = document.createElement('p');
        newPNumber.textContent = i+1;//data.posts[i].id;
        let newDivUpVoting = document.createElement('div');
        newDivUpVoting.setAttribute('class','up voting');
        let newPVoteNumber = document.createElement('p');
        newPVoteNumber.setAttribute('class','vote_number');
        let newDivDownVoting = document.createElement('div');
        newDivDownVoting.setAttribute('class','down voting');
        let newDivTitle = document.createElement('div');
        newDivTitle.setAttribute('class','title');
        let newH2 = document.createElement('h2');
        newH2.setAttribute('class','titleh2');
        let newPDescription = document.createElement('p');
        newPDescription.setAttribute("class","description");
        
        let newRemove = document.createElement('h5');
        newRemove.textContent = 'Remove';
        newRemove.setAttribute('class','removeButton');
        let newModify = document.createElement('h5');
        newModify.textContent = 'Modify';
        newModify.setAttribute('class','modifyButton');
        
        
        
       // newDivTitle.appendChild(newModify);

        newDivPost.appendChild(newDivLike);
        newDivLike.appendChild(newDivNumeric);
        newDivNumeric.appendChild(newPNumber);
        newDivLike.appendChild(newDivUpVoting);
        newDivLike.appendChild(newPVoteNumber);
        newDivLike.appendChild(newDivDownVoting);
        newDivPost.appendChild(newDivTitle);
        newDivTitle.appendChild(newH2);
        newDivTitle.appendChild(newPDescription);
        newDivTitle.appendChild(newRemove);
        contentDiv.appendChild(newDivPost);
    }
    buttonFunctionStart();
}

function getContent() {

    if (Httprequest.readyState === XMLHttpRequest.DONE) {
        if (Httprequest.status === 200) {
            //console.log(Httprequest.response);
            data = JSON.parse(Httprequest.response);
            //console.log(data);
            //console.log(data[3]._id);
            setColumeValue(data);
            setContent();
            //console.log(data);
            //console.log(postH2Tag);
    
            
        }
    }
}
function setContent(){
    for(let i = 0 ; i < data.length ; i++){
        //console.log(data);
        postH2Tag[i].textContent = data[i].title;
        postVoteNumberTag[i].textContent = data[i].score;
        let time = getTime(JSON.parse(data[i].timestamp));
       // console.log(data[i].title);
        postDescriptionTag[i].textContent = time;
    }
}

onReadyStateChange();




function buttonFunctionStart(){
    for(let i = 0 ; i < postVoteUpVoting.length ; i++){
        removeButton[i].addEventListener('click',removeFunction(data[i]._id));
        postVoteUpVoting[i].addEventListener('click' , upvoteCallBack(i));
        postVoteDownVoting[i].addEventListener('click', downvoteCallBack(i));
    }
}

function removeFunction(index){
    let temp = index;
    function Removepost(){
        Httprequest.onreadystatechange = function(){
            if(Httprequest.readyState === XMLHttpRequest.DONE){
                //window.location.reload(true);     
            }
        };
        Httprequest.open('DELETE','http://localhost:8080/posts/'+index);
        //Httprequest.send();//object string
        Httprequest.setRequestHeader("Accept", "application/json");
        Httprequest.send();//object string
        window.location.reload(true);
        getContent();
    }
    return Removepost;
    
    
}

function upvoteCallBack(index){
    //data = JSON.parse(Httprequest.response);
    function upvote() 
    {
        let temp = index;
        Httprequest.onreadystatechange = function(){
            if (Httprequest.readyState === XMLHttpRequest.DONE) {
                if (Httprequest.status === 200) {
                    postVoteNumberTag[temp].textContent = JSON.parse(Httprequest.response).score;              
                    postVoteUpVoting[temp].setAttribute('style' , "background-image: url('./photo/upvoted.png'); ");
                    let time = getTime(JSON.parse(Httprequest.response).timestamp,JSON.parse(Httprequest.response).owner);
                    postDescriptionTag[temp].textContent = time;
                    postVoteUpVoting[temp].removeEventListener('click',upvote);
                
                }
            }
        };
        Httprequest.open('PUT','http://localhost:8080/posts/'+data[temp]._id+'/upvote');
        Httprequest.send();   //https://time-radish.glitch.me/posts/
    }
    return upvote;
}


function downvoteCallBack(index){
    function downvote() {
        let temp = index;
        Httprequest.onreadystatechange = function(){
           // console.log(JSON.parse(Httprequest.response)[temp].score);
            if (Httprequest.readyState === XMLHttpRequest.DONE) {
                if (Httprequest.status === 200) {
                    postVoteNumberTag[temp].textContent = JSON.parse(Httprequest.response).score;
                    postVoteDownVoting[temp].setAttribute('style' , "background-image: url('./photo/downvoted.png'); ");
                    let time = getTime(JSON.parse(Httprequest.response).timestamp , JSON.parse(Httprequest.response).owner);
                    postDescriptionTag[temp].textContent = time;
                    postVoteDownVoting[temp].removeEventListener('click',downvote);
                }
            }
        };
        Httprequest.open('PUT','http://localhost:8080/posts/'+data[temp]._id+'/downvote');
        Httprequest.send();   
    }
    return downvote;
}


function getTime(time){
    let d = new Date(time);
    let today = new Date;
    let formattedDate = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear();
    let hours = (d.getHours() < 10) ? "0" + d.getHours() : d.getHours();
    let minutes = (d.getMinutes() < 10) ? "0" + d.getMinutes() : d.getMinutes();
    let formattedTime = hours + ":" + minutes;
    let resultTimeHour
    let resultTimeMinutes
    if(today.getHours() - hours < 0){
        resultTimeHour = 24+today.getHours() - hours;
    }
    else {
        resultTimeHour = today.getHours() - hours;
    }
    if(resultTimeMinutes = today.getMinutes() - minutes < 0){
        resultTimeMinutes =60 + today.getMinutes() - minutes;
    }
    else{
        resultTimeMinutes = today.getMinutes() - minutes;
    }
    
    let resultTime = "submitted "+'0' + " hours " + resultTimeMinutes+" minutes ago by anymous";
    return resultTime;
  

}


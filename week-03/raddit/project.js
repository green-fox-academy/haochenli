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
    Httprequest.open('GET','https://time-radish.glitch.me/posts');
    Httprequest.send();
}
function setColumeValue (input){
    let size = input.posts.length;
 
    for(let i = 0 ; i < size ; i++){
        let newDivPost = document.createElement('div');
        newDivPost.setAttribute("class","post");
        let newDivLike = document.createElement('div');
        newDivLike.setAttribute("class" , "like");
        let newDivNumeric = document.createElement('div');
        newDivNumeric.setAttribute("class" , "numeric");
        let newPNumber = document.createElement('p');
        newPNumber.textContent = data.posts[i].id;
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
            data = JSON.parse(Httprequest.response);
            setColumeValue(data);
            setContent();
            //console.log(data);
            //console.log(postH2Tag);
    
            
        }
    }
}
function setContent(){
    for(let i = 0 ; i < data.posts.length ; i++){
        console.log(data);
        postH2Tag[i].textContent = data.posts[i].title;
        postVoteNumberTag[i].textContent = data.posts[i].score;
        let time = getTime(JSON.parse(data.posts[i].timestamp));
        console.log(data.posts[i].title);
        postDescriptionTag[i].textContent = time;
    }
}

onReadyStateChange();




function buttonFunctionStart(){
    for(let i = 0 ; i < postVoteUpVoting.length ; i++){
        removeButton[i].addEventListener('click',removeFunction(data.posts[i].id));
        postVoteUpVoting[i].addEventListener('click' , upvoteCallBack(i));
        postVoteDownVoting[i].addEventListener('click', downvoteCallBack(i));
    }
}

function removeFunction(index){
    let temp = index;
    function Removepost(){
        Httprequest.onreadystatechange = function(){
            if(Httprequest.readyState === XMLHttpRequest.DONE){
                window.location.reload(true);
                console.log('I changed');
                console.log(data);     
            }
        };
        Httprequest.open('DELETE','https://time-radish.glitch.me/posts/'+index);
        //Httprequest.send();//object string
        Httprequest.setRequestHeader("Accept", "application/json");
        Httprequest.send();//object string
        getContent();
        
    }
    return Removepost;
    
    
}

function upvoteCallBack(index){
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
        Httprequest.open('PUT','https://time-radish.glitch.me/posts/'+data.posts[temp].id+'/upvote');
        Httprequest.send();   
    }
    return upvote;
}


function downvoteCallBack(index){
    function downvote() {
        let temp = index;
        Httprequest.onreadystatechange = function(){
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
        Httprequest.open('PUT','https://time-radish.glitch.me/posts/'+data.posts[temp].id+'/downvote');
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


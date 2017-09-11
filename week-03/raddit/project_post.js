'use strict';
var url = document.getElementsByClassName('url')[0];
var title = document.getElementsByClassName('text')[0];
var checkbox = document.getElementsByClassName('checkbox')[0];
var submit = document.getElementsByClassName('submit')[0];
var Httprequest = new XMLHttpRequest;
var data;
var whether_anyonmous = false;
var url_content;
var title_content;
var sendContent = {
    title: '',
    href:'',
    owner:'anonymous'

}
console.log(location.search);
console.log("run");
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        // Checkbox is checked..
        whether_anyonmous = true;
    } else {
        // Checkbox is not checked..
        whether_anyonmous = false;
    }
    console.log(whether_anyonmous);
});

submit.addEventListener('click' , function(){
    url_content = url.value;
    title_content = title.value;
    onReadyStateChange();
    //console.log(title_content);
    //console.log(url_content);
});

function onReadyStateChange(){
    Httprequest.onreadystatechange = post_begin;
  
    Httprequest.open('POST','https://time-radish.glitch.me/posts');
    //Httprequest.send();//object string
    sendContent.href = url_content;
    sendContent.title = title_content;
    if(checkbox === false) {
        sendContent.owner = 'I have Name!';
    }
   
    Httprequest.setRequestHeader("Accept", "application/json");
    Httprequest.setRequestHeader("Content-Type", "application/json");
    console.log(sendContent);
    Httprequest.send(JSON.stringify(sendContent));//object string
}

function post_begin(){
    if (Httprequest.readyState === XMLHttpRequest.DONE) {
        if (Httprequest.status === 200) {
            data = JSON.parse(Httprequest.response);
            window.location.reload(true);
            //alert("already submited");
            console.log(data);
        }
    }
}

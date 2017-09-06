'use strict';

/*
var fetchMessage = new XMLHttpRequest;
var data;


function begin(){
    fetchMessage.onreadystatechange = connect;
    fetchMessage.open('GET','https://wakeful-vision.glitch.me/api/messages');
    fetchMessage.send();
}

function connect(){
    if (fetchMessage.readyState === XMLHttpRequest.DONE) {
        if (fetchMessage.status === 200) {
            data = JSON.parse(fetchMessage.responseText);
            console.log(data);
        }
    }
}
window.addEventListener("load",begin);*/

var fetchMessage = fetch('https://wakeful-vision.glitch.me/api/messages', {
	method: 'get'
}).then(function(response) {
	console.log('Status:', response.status).then(function(data){
        console.log('Fetch result',data);
    })
}).catch(function(err) {
	// Error :(
});


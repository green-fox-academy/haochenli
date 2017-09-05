'use strict';

var buttonElements = [
  'Button 0',
  'Button 1',
  'Button 2'
].map(function(buttonText) {
  var buttonElement;
  buttonElement = document.createElement('button');
  buttonElement.appendChild(document.createTextNode(buttonText));
  return buttonElement;
});


function appendButtons() {
  for(var i = 0; i < buttonElements.length; i++) {    
    buttonElements[i].addEventListener('click', callbackback(i));
    document.body.appendChild(buttonElements[i]);
  }
}

function callbackback(number){
    return function callback(){
        console.log('button index: '+number);  
    }
}


window.addEventListener('load', appendButtons);

//We want to display the buttons original index within the definition array
//Unfortunately a developer made a serious bug, if we click on any button we get 3 as index.
//Please fix the bug. (without changeing the button attributes)
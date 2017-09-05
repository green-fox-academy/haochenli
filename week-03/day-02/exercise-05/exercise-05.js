'use strict';

var vehicle, car, airplane, skateboard, buttonElements;

//Object definitions
vehicle = {
  printMaxSpeed: function() {
    console.log(this.maxSpeed);
  }
}

car = Object.create(vehicle, {
  maxSpeed: {
    value: 130
  }
});

airplane = Object.create(vehicle, {
  maxSpeed: {
    value: 650
  }
});

skateboard = Object.create(vehicle, {
  maxSpeed: {
    value: 12
  }
});

buttonElements = [
  ['This is a car', 'car'],
  ['This is an airplane', 'airplane'],
  ['This is a skateboard', 'skateboard']
]
// End of object definitions

window.addEventListener('load', function() {
  buttonElements
    .map(function(buttonDescriptor) {
      var buttonElement;
      buttonElement = document.createElement('button');
      buttonElement.appendChild(document.createTextNode(buttonDescriptor[0]));
      buttonElement.setAttribute('data-vehicle-type', buttonDescriptor[1])
      return buttonElement;
    })
    .forEach(function(buttonElement) {
      document.body.appendChild(buttonElement);
      buttonElement.addEventListener("click",function(){

        if(buttonElement.getAttribute("data-vehicle-type") === "car"){
            car.printMaxSpeed();
          }     
          else if(buttonElement.getAttribute("data-vehicle-type") === "airplane"){
            airplane.printMaxSpeed();
          }
          else{
            skateboard.printMaxSpeed();
          }
      })   
    });
});

//When the user clicks on a button, the maxspeed of the appropriate vehicle should be logged to the console. Please implement this functionality.
// - Use the common printMaxSpeed function
// - You don't need to change the object definitions.S
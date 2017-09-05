'use strict';
var Animal = function(){
    this.hungerValue = 50;
    this.thristValue = 50;
    this.eat = function(){
      this.hungerValue--;  
    };
    this.drink = function(){
        this.thristValue--;
    };
    this.play = function() {
        this.thristValue++;
        this.hungerValue++;
    };
}

var Farm = function(number){//number is the free slots
    var list=[];
    this.slots = number;
    this.breed =function(Animal){
        if(this.slots>0){
            list.push(Animal);
            this.slots--;
        }    
    };
    this.slaughter = function(){
        let min = list[0];
        let flag = 0;
        for(let i = 1 ; i < list.length; i++){
            if(list[i].hungerValue < min){
                min = list[i];
                flag = i;
            }
        }
        delete list[flag];
    }
}

module.exports = {
    Animal: Animal,
    Farm: Farm
}
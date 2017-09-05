'use strict';

var Rocket = function(type,level,launches){    
    this.type = type;
    this.fuel = level;
    this.launches = launches;
    this.launch = function(){
        if(this.type === "falcon1"){
            if(this.fuel >= 1){
                this.fuel--;
                this.launches++;                
            }
        }
        else{       
            if(this.fuel >= 9){
                this.fuel-=9;
                this.launches++;          
            }
        }      
    };
    this.refill = function(){
        let amount = 0 ;   
        if(this.type === "falcon1"){
            amount=5-this.fuel;
            this.fuel = 5;
        }
        else{
            amount=20-this.fuel;
            this.fuel = 20;      
        }
        return amount;
    };
    this.getStats = function(){
        return "name: "+this.type+",fuel: "+this.fuel+"launches:"+this.launches;
    };
}
var SpaceX = function(fuel){
    this.list = [];
    this.fuel = fuel;
    this.addRocket = function(Rocket){
        this.list.push(Rocket);
    };
    this.refillAll = function(){
        let Totalamount = 0;
        for(let i = 0 ; i < this.list.length; i++){
            Totalamount+=this.list[i].refill();
        }
        this.fuel-=Totalamount;
    };
    this.launchAll = function() {
        this.list.forEach(function(rocket) {
            rocket.launch();
        }, this);
    };
    this.buyFuel= function(amount) {
        this.fuel+=amount;
    };
    this.getStats = function() {
        let lau = 0;
        this.list.forEach(function(rocket) {
            lau += rocket.launches;
        }, this);
        return "rockets:"+this.list.length+",fuel:"+this.fuel+"launches: "+lau;
    };
}

var falcon1 = new Rocket('falcon1',0,0)
var returnedFalcon9 = new Rocket('falcon9', 11, 1)
falcon1.refill() // 5
falcon1.launch()

console.log(falcon1.getStats()) // name: falcon1, fuel: 4, launches: 1
console.log(returnedFalcon9.getStats()) // name: falcon9, fuel: 11, launches: 1
var spaceX = new SpaceX(100)
var falcon1 = new Rocket('falcon1', 0, 0)
var falcon9 = new Rocket('falcon9', 0, 0)
var returnedFalcon9 = new Rocket('falcon9', 11, 1)
console.log(returnedFalcon9.getStats()) // name: falcon9, fuel: 11
spaceX.addRocket(falcon1)
spaceX.addRocket(falcon9)
spaceX.addRocket(returnedFalcon9)
console.log(spaceX.getStats()) // rockets: 3, fuel: 100, launches: 
spaceX.refillAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 1
spaceX.launchAll()
console.log(spaceX.getStats()) // rockets: 3, fuel: 66, launches: 4
spaceX.buyFuel(50)
console.log(spaceX.getStats()) // rockets: 3, fuel: 116, launches: 4
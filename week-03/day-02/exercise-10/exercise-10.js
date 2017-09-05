'use strict';
var speed_time = 1;
var candies = 990;
var lollypops = 0;
var button = document.getElementsByTagName("button");
var stats = document.getElementsByClassName("stats")[0];
var label = stats.getElementsByTagName("dd");
label[1].textContent = " \b";

button[0].addEventListener('click',create_candies);
function create_candies(){
    candies++;
    label[0].textContent = candies;
}
var one_time_speeder = setInterval(add_rate,1000);
function add_rate (){
    let times = Math.floor(lollypops/10);
    for(let i = 0 ; i < times ; i++){
        candies++;
    }
    label[0].textContent = candies;
    label[2].textContent = times;
}

button[1].addEventListener('click',buy_lollypops);
function buy_lollypops(){
    if(candies>=100){
        lollypops++;
        let temp = '\b';
        for(var i = 0 ; i < lollypops ; i++){
            temp+="🍭";
        }
        label[1].textContent = temp;
        candies-=100;
        label[0].textContent = candies;
    }
}

button[2].addEventListener('click',ten_times);
function ten_times(){
    clearInterval(one_time_speeder);
    speed_time/=10;
    one_time_speeder = setInterval(add_rate,speed_time);
}
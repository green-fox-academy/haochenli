'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use('/assets',express.static('assets'));

app.get('/',function(req,res){
    res.sendFile(__dirname+'/index.html');
});

app.get('/greeter',function(req,res){
    if(req.query.name === undefined){
        var newObject = {
            error : "Please provide a name!"
        };
        res.send(newObject);
    }
    if(req.query.title === undefined){
        var newObject = {
            error : "Please provide a title!"
        };
        res.send(newObject);
    }
    //console.log(eq.query.name);
    //console.log(eq.query.title);
    let name = req.query.name;
    let title = req.query.title;
    var greetObj = {
        welcome_message :"Oh, hi there "+name+", my dear "+title+"!"
    };
    res.send(greetObj);
});

app.get('/doubling',function(req,res){
    //console.log(req.query.input);
    if(req.query.input === undefined){
        var newObject = {
            error : "Please provide an input!"
        };
        res.send(newObject);
    }
    let temp = req.query.input;
    var newObject = {
        received : temp,
        result : 2*temp
    };
    res.send(newObject);
});
app.get("/appenda/:id",function(req,res){
   
    let myObj = {
        appended: req.params.id+'a'
    }
    res.send(myObj);//(inside is the route parameters)
    
});
var jsonParser = bodyParser.json();
// POST /login gets urlencoded bodies
app.post('/dountil/:id', jsonParser, function (req, res) {
    console.log(req.params.id);
    console.log(req.body.until);
    let resultf = 0;
    let func = req.params.id;
    let number = req.body.until;
    if(func === 'sum'){
        while(number>0){
            resultf+=number;
            number--;
        }
    }
    if(func ==='factor'){
        resultf =1;
        while(number>0){
            resultf*=number;
            number--;
        }
    }
    let myObj = {
        "result" : resultf
    }
    res.send(myObj);
});
app.post('/sith', jsonParser, function (req, res) {
    //console.log(req.body.numbers)
    //console.log(req.body.what);
    let text = req.body.text;
    let temp = text.split(' ');

    //console.log(temp);
    
    for(let i = 0 ; i < temp.length-1 ; i+=2){
        if(temp[i][temp[i].length-1] === '.'){
            i+=1;
        }
        let t = temp[i].toLowerCase();
        temp[i] = temp[i+1].toLowerCase();
        temp[i+1] = t;
    }
    let result123 = temp.join(" ");   
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    } 
    res.send(capitalizeFirstLetter(result123));
});
app.post('/arrays', jsonParser, function (req, res) {
    //console.log(req.body.numbers)
    //console.log(req.body.what);
    if(req.body.numbers===undefined || req.body.numbers===undefined){
        var newObj = {
            error : "Please provide what to do with the numbers!"
        }
        res.send(newObj);
    }
    let what = req.body.what;
    let array = req.body.numbers;
    let temp = 0;
    if(req.body.what === 'sum'){
        for (let i = 0 ; i < array.length ; i++){
            temp+=array[i];
        }
    } 
    if(req.body.what === 'double'){
        let temp2 = array.map(function(element){
            return element*2;
        });
        temp = temp2;
    }
    if(req.body.what === 'multiply'){
        temp = 1;
        for (let i = 0 ; i < array.length ; i++){
            temp*=array[i];
        }
    }
    var newObj = {
        result : temp
    }
    res.send(newObj);
});
app.listen(8080);
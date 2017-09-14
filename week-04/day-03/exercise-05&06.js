'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;
var express = require('express');
var app = express();

var url = 'mongodb://localhost:27017/epam';
var Obj;
var str = [];



app.get('/students',function(req,res){
    let fields = req.query.fields;//fileds array
    let gender = req.query.gender;
    let obj = {}; //[]
    fields.forEach(function(element) {
        obj[element] = true;
    });

    console.log(fields);
    
    MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        if(fields === undefined){
            var cursor = db.collection('students').find({'gender' : gender});//{}is object
        }
        else{
            var cursor = db.collection('students').find({'gender' : gender},obj);
        }
       
        //console.log(cursor.toArray()[0]);
        cursor.each(function(err,doc){//doc is an object
          
            if(doc !=  null && doc != undefined){
                //console.log(doc);
                //console.log(JSON.stringify(doc));
                //console.log(typeof(JSON.stringify(doc)));
              
                str.push(doc);
              
            }
            //str+=JSON.stringify(doc);
        });
        //Obj = JSON.parse(str);
      
        res.send(JSON.stringify(str));
        str = [];
        db.close();
      });
      
});


app.get('/students',function(req,res){
    MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        
        var cursor = db.collection('students').find({});
        //console.log(cursor.toArray()[0]);
        cursor.each(function(err,doc){//doc is an object
          
            if(doc !=  null && doc != undefined){
                //console.log(doc);
                //console.log(JSON.stringify(doc));
                //console.log(typeof(JSON.stringify(doc)));
              
                str.push(doc);
                // let temp = doc;
             
            }
            //str+=JSON.stringify(doc);
        });
        //Obj = JSON.parse(str);
       
        res.send(JSON.stringify(str));
        str = [];
        db.close();
      });
      
});

app.get('/students/:name',function(req,res){

    var name = req.params.name;
    console.log(name);
    console.log(typeof(name));
    
    MongoClient.connect(url, function (err, db) {
        if (err) {
          console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        
        var cursor = db.collection('students').find({'name': name});
        //console.log(cursor.toArray()[0]);
        cursor.each(function(err,doc){//doc is an object
          
            if(doc !=  null && doc != undefined){
                //console.log(doc);
                //console.log(JSON.stringify(doc));
                //console.log(typeof(JSON.stringify(doc)));
              
                str.push(doc);
                // let temp = doc;
             
            }
            //str+=JSON.stringify(doc);
        });
        //Obj = JSON.parse(str);
       
        res.send(JSON.stringify(str));
        str = [];
        db.close();
      });
      
});





app.listen(3000);
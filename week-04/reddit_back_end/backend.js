'use strict';
var mongodb = require('mongodb');
var express = require('express');
var MongoClient = mongodb.MongoClient;
var app = express();

var url = 'mongodb://localhost:27017/reddit';

app.get('/hello',function(req,res){
    console.log('hello world');
    res.send("hello world");

});

app.get('/posts',function(req,res){
    MongoClient.connect(url,function(err,db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
          }
        var cursor = db.collection('posts').find({});
        cursor.forEach(function(err,doc){

        });
    });
})

app.listen(8080);
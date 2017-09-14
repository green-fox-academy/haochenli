'use strict';
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var express = require('express');
var MongoClient = mongodb.MongoClient;
var app = express();
var sendinfos = [];
var url = 'mongodb://localhost:27017/reddit';

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded



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
        cursor.each(function(err,doc){
            sendinfos.push(doc);
        });
        res.send(JSON.stringify(sendinfos));
        sendinfos = [];
        db.close();
    });
})

app.post('/posts/:id/:votetype',function(req,res){
    let id = req.params.id;
    let votetype = req.params.votetype;
    MongoClient.connect(url,function(err,db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
          }
        if(votetype === 'upvote'){
            db.collection('posts').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
                let score = items[0].score;
                score=score+1;
                db.collection('posts').updateOne(
                    {'_id' : mongodb.ObjectId(id)}, {$set: {"score" : score}}
                );
                var cursor = db.collection('posts').find({'_id' : mongodb.ObjectId(id)});
                cursor.each(function(err,doc){
                    sendinfos.push(doc);
                });
                res.send(JSON.stringify(sendinfos));
                sendinfos = [];
                db.close();
            })
        }
        if(votetype === 'downvote'){
            db.collection('posts').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
                let score = items[0].score;
                score=score-1;
                db.collection('posts').updateOne(
                    {'_id' : mongodb.ObjectId(id)}, {$set: {"score" : score}}
                );
                var cursor = db.collection('posts').find({'_id' : mongodb.ObjectId(id)});
                cursor.each(function(err,doc){
                    sendinfos.push(doc);
                });
                res.send(JSON.stringify(sendinfos));
                sendinfos = [];
                db.close();
            })
        } 
    });
})


app.post('/posts',function(req,res){
    var sendContent = {
        title: '',
        href: '',
        timestamp: Date.parse(new Date),
        score: 0,
        owner: "anynomous",
        vote : 0
    }
    let title = req.body.title;
    let href = req.body.href;
    MongoClient.connect(url,function(err,db){
        if(err) {
            console.log('Unable to connect to the mongoDB server',err);
        }
        sendContent.title = title;
        sendContent.href = href;
        db.collection('posts').insert(sendContent);
        res.send(sendContent);

        db.close();
        });
});

app.listen(8080);
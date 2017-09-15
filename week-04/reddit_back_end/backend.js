'use strict';
var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var express = require('express');
var MongoClient = mongodb.MongoClient;
var app = express();
var sendinfos = [];
var url = 'mongodb://localhost:27017/reddit';
app.use(express.static('raddit'));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/posts',function(req,res){
    MongoClient.connect(url,function(err,db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
        }
        var cursor = db.collection('posts').find({}).toArray(function(err,items){
            res.send(JSON.stringify(items));
            db.close();
        });
    });
})

app.put('/posts/:id/:votetype',function(req,res){
    let id = req.params.id;
    let votetype = req.params.votetype;
    MongoClient.connect(url,function(err,db){
        if (err) {
            console.log('Unable to connect to the MongoDB server. Error:', err);
          }     
        db.collection('posts').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            
            if(votetype === 'upvote'){
                items[0].score++;
            }
            else{
                items[0].score--;
            }
            db.collection('posts').updateOne(
                {'_id' : mongodb.ObjectId(id)}, {$set: {"score" : items[0].score}}
            );
            res.send(JSON.stringify(items[0]));
            db.close();
        });  
        
    });
})

app.post('/posts',function(req,res){
    var sendContent = {
        id: '6',
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

app.delete('/posts/:id',function(req,res){
    let id = req.params.id;
    MongoClient.connect(url,function(err,db){
        if(err) {
            console.log('Unable to connect to the mongoDB server',err);
        }
        db.collection('posts').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            sendinfos.push(items);
            res.send(JSON.stringify(sendinfos));
            db.collection('posts').deleteOne({'_id' : mongodb.ObjectId(id)});
            sendinfos = [];
            db.close();
            });
        });
});

app.put('/posts/:id',function(req,res){
    console.log('aaa');
    let id = req.params.id;
    let title = 'modified title';
    let href = 'I have changed';
    MongoClient.connect(url,function(err,db){
        if(err) {
            console.log('Unable to connect to the mongoDB server',err);
        }
        db.collection('posts').updateOne(
            {'_id' : mongodb.ObjectId(id)} , {$set: {"title" : title , "href" : href}}
        ); 
        db.collection('posts').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            res.send(items);
        });
        db.close();
    })
});

app.listen(8080);
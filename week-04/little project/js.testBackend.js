'use strict';

var bodyParser = require('body-parser');
var mongodb = require('mongodb');
var express = require('express');
var MongoClient = mongodb.MongoClient;
var app  = express();
var url = 'mongodb://localhost:27017/JSA';
var ObjectID = require('mongodb').ObjectID;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); 

app.get('/api/todos',function(req,res){
    MongoClient.connect(url,function(err,db){
        if (err) {
            let items = {
                "error": "Something went wrong."
            }
            res.status(500).send(items);
            db.close();
            return;
        }
        var cursor = db.collection('jsa_test').find({}).toArray(function(err,items){
            let obj = {
                'todos': items
            };
            res.send(obj);
            db.close();
        });
    });
})

app.get('/api/todos/:id',function(req,res){
    let id = req.params.id;
    console.log(id);
    MongoClient.connect(url,function(err,db){
        if (err) {
            let items = {
                "error": "Something went wrong."
            }
            res.status(500).send(items);
            db.close();
            return;
        }     
        db.collection('jsa_test').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            if(items.length === 0){
                let obj = {
                    'error': "Resource was not found."
                }
                res.send(obj);
                return;
            }
            //console.log(items);
            res.send(items[0]);
            db.close();
        });  
    });
})


app.post('/posts/api/todos',function(req,res){
    let newID = new ObjectID();
    var sendContent = {
       "description" : " ",
       "state" : 0,
       '_id': newID
    };
    let description = req.body.description;
    if (typeof(req.body.state) !== 'undefined' && typeof(req.body._id !== 'undefined')){
        console.log("error");
        let obj = {
            'error': "Bad request body."
        }
        res.status(400).send(obj);
        return;
    }
    MongoClient.connect(url,function(err,db){
        if(err) {
            let obj = {
                'error': "Resource was not found."
            }
            res.status(500).send(obj);
            db.close();
            return;
        }
        sendContent.description = description;
        sendContent.state = 0;
        
        db.collection('jsa_test').insert(sendContent);
        res.set('location', '/api/todos/'+newID);
        res.status(201).send();
        db.close();
    });
});

app.put('/api/todos/:id',function(req,res){
    let id = req.params.id;
    MongoClient.connect(url,function(err,db){
        if (err) {
            let items = {
                "error": "Something went wrong."
            }
            res.status(500).send(items);
            db.close();
            return;
        }

        db.collection('jsa_test').updateOne({'_id' : mongodb.ObjectId(id)} , {$set: {"state" : 1 }}); 
        db.collection('jsa_test').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            res.send(items[0]);
            db.close();
        });  
    });
});


app.delete('/api/todos/:id',function(req,res){
    let id = req.params.id;
    MongoClient.connect(url,function(err,db){
        if (err) {
            let items = {
                "error": "Something went wrong."
            }
            res.status(500).send(items);
            db.close();
            return;
        } 
        db.collection('jsa_test').find({'_id' : mongodb.ObjectId(id)}).toArray(function(err,items){
            console.log(items.length);
            if(items.length === 0){
                let items = {
                    "error": "Resource was not found."
                }
                res.status(404).send(items);
                db.close();
                return;  
            }
            db.collection('jsa_test').deleteOne({'_id' : mongodb.ObjectId(id)});
            db.close();
            res.status(204).send('No content');
            });
        });
});


app.listen(3001);
'use strict';
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;
var ObjectID = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/JSA';
mongoClient.connect(url,function(err,db){
    if(err){
        console.log('can not connect to the mongodb server');
    }
    console.log("connected to the server "+url);
    insertData(db,function(result){
        console.log(result);
    });
    db.close();
});

function insertData(db,consoleFunction){
    var collection = db.collection('jsa_test');
    var data = [
          {
            '_id': new ObjectID(),
            "description": "Read the Clean Code",
            "state": 0
          },
          {
            '_id': new ObjectID(),
            "description": "Drink beer",
            "state": 1
          }
        ];

    collection.insert(data,function(){
        return consoleFunction;
    });
    
}
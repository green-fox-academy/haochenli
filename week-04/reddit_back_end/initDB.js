'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/reddit';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  console.log('Connection established to ' + url);
  insertData(db, function(result) {
    console.log(result);
  });
  db.close();
});

function insertData(db, callback) {
  var collection = db.collection('posts');
  var data = [
    {
      "id": 0,
      "title": "Dear JavaScript",
      "href": "http://9gag.com",
      "timestamp": 1494339525,
      "score": 791,
      "owner": null,
      "vote": 1
    },
    {
      "id": 1,
      "title": "Crockford",
      "href": "http://9gag.com",
      "timestamp": 1494138425,
      "score": 567,
      "owner": "kristof4",
      "vote": -1
    }
  ];
  collection.insert(data, function(err, result) { 
    if(err){
      console.log('Error:'+ err);
      return;
    }     
    callback(result);
  });
}
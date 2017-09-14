'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  var cursor = db.collection('students').find({'name':'Haochen Li'});
  cursor.each(function(err,doc){
      console.log(doc);
  });


  var cursor_User = db.collection('students').find({},{'github': 1,'_id': 0});
  cursor_User.each(function(err,doc){
      console.log(doc);
  });

  var cursor_except = db.collection('students').find({'name' : {$ne:'Haochen Li'}},{'name': 1,'_id': 0});
  cursor_except.each(function(err,doc){
      console.log(doc);
  });


  var cursor_except = db.collection('students').find({'gender' : 'male'});
  cursor_except.each(function(err,doc){
      console.log(doc);
  });


  
  db.close();
});


'use strict';

var mongodb = require('mongodb');
var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/epam';

MongoClient.connect(url, function (err, db) {
  if (err) {
    console.log('Unable to connect to the MongoDB server. Error:', err);
  }
  
  db.collection('students').updateOne(
      {"name": "John Doe"}, {$set: {"github": "johndoe"}
  });
  db.collection('students').updateOne(
    {"name": "Haochen Li"}, {$set: {"age": "25"}
  }); 






var cursor_User = db.collection('students').find({},{'github': 1,'_id': 0});
cursor_User.each(function(err,doc){
    console.log(doc);
    console.log(typeof(doc));
});

  db.close();
});


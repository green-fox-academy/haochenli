'use strict';
var mongodb = require('mongodb');
var mongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/reddit';
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
    var collection = db.collection('UserInfos');
    var data = [
        {
            'username ': 'Haochen Li' ,
            'password ': 'Lhc19921105'
        },
        {
            'username' : 'dahaoren',
            'password' : 'dahaoren'
        }
    ];

    collection.insert(data,function(){
        return consoleFunction;
    });
    
}
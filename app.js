var ni = require('nodeigniter'),
    connect = require('connect');

ni.config('root', __dirname + '/app/');
ni._initialize(function(){
    connect.createServer(
		connect.favicon('public/favicon.ico'),
        connect.static('public'),
        connect.bodyParser(),
        connect.query(),
        connect.cookieParser('ni_cookie'),
        connect.session({secret: 'kM43QtvEhmhH2KK9sJac',cookie: {maxAge: 36000}}),
        ni.router,
        ni.not_found
    ).listen(8082);
    console.log('Application Started on Port: '+8082);
});

/*
var Db = require('mongodb').Db;
var Connection = require('mongodb').Connection;
var Server = require('mongodb').Server;
var BSON = require('mongodb').BSON;
var ObjectID = require('mongodb').ObjectID;

var db = new Db('test', new Server('localhost', 27017, {auto_reconnect: true}, {}));
db.open(function(){});
db.collection('articles', function(error, d) {
    if( error ) console.log(error);
    else console.log("\n\n\n");
    console.log(d.findOne({name: 'AMIR'}));
});

*/
// Retrieve
var MongoClient = require('mongodb').MongoClient;

// Connect to the db
MongoClient.connect("mongodb://localhost:27017/test", function(err, db) {
  if(!err) {
    console.log("We are connected");
  }
});
/* Version MongoDb
const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

const uri = "mongodb+srv://mongodb_admin:e0wl8BtEQ50Uzcnu@dreamcluster.lt12i.mongodb.net/DreamDb?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    const collection = client.db("DreamDb").collection("Customers");
    // perform actions on the collection object
    if (!err) {
        console.log("MongoDb connected successfully!");
        collection.find({}).toArray(function(error, docs) {
            if (!error) {
                console.log("Docs : "+docs);
                callback(docs);
            } else console.log("Error")
          });
    }
    else console.log("MongoDb connexion failed! error : "+err)
    client.close();
  });

*/

/* Version Mongoose */
const mongoose = require('mongoose')
const uri = 'mongodb+srv://mongodb_admin:e0wl8BtEQ50Uzcnu@dreamcluster.lt12i.mongodb.net/DreamDb?retryWrites=true&w=majority'

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    if (!err) console.log('MongoDb connected with mongoose')
    else console.log('MongoDb NOT connected, error : ' + err)
  }
)

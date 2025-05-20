const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let database;

const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://ugrimov35335:A3mi6TU3x1EJlsZK@cluster0.usnwarh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
    .then((client) => {
      console.log("Connected to MongoDB!");
      database = client.db("shop");
      callback();
    })
    .catch((error) => console.log("Connection error:", error));
};

const getDatabase = () => {
  if (!database) {
    throw "No database found!";
  }
  return database;
};

module.exports = { mongoConnect, getDatabase };

require("dotenv").config();
const { MongoClient } = require("mongodb");

let database;

const mongoConnect = async (callback) => {
  const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/?retryWrites=true&w=majority`;

  try {
    const client = await MongoClient.connect(uri);
    console.log("Connected to MongoDB!");
    database = client.db("shop");
    callback();
  } catch (error) {
    console.log("Connection error:", error);
  }
};

const getDatabase = () => {
  if (!database) throw "No database found!";
  return database;
};

module.exports = { mongoConnect, getDatabase };

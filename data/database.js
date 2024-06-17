const dotenv = require('dotenv');
const { MongoClient } = require('mongodb');
dotenv.config ();

const mongoClient = require('mongodb').MongoClient;

let database;

const intDb = (callback) => {
    if (database) {
        console.log('DB is already initialized!');
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        })

};

const getDatabase = () => {
    if (!database) {
        throw Error('Databas is not initialized');
    }
    return database;
}

module.exports = {
    intDb,
    getDatabase
}
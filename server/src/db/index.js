const mongoClient = require("mongodb").MongoClient;

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

let _db;

const mongoConnect = (cb) => {
    mongoClient.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(res => {
        console.log('Success', res, url);
        _db = res.db();
        cb();
    }).
    catch(err => console.log('Error', err, url));
}

const getDB = () => {
    if (_db) {
        return _db;
    }
    throw Error('No Database found!!');
}

module.exports = {
    mongoConnect,
    getDB
}
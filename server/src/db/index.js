const mongoose = require("mongoose");

const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB
} = process.env;

console.log(MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB);

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

let _db;


const mongoConnect = (cb) => {
    mongoose.connect(url, {
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


getDB = () => {
    if (_db) {
        return _db;
    }
    throw Error('No Database found!!');
}

module.exports = {
    mongoConnect,
    getDB
}
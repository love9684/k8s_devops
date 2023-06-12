const { getDB } = require('../db');

exports.getDummyData = async (req, res) => {
    const db = getDB();
    await db.collection('user').insertOne({name: 'lovelesh'});
    const users = await db.collection('user').findOne().toArray();
    res.send(users);
}

exports.setDummyData = async (req, res) => {
    res.send([{name: 'lovelesh'}]);
}
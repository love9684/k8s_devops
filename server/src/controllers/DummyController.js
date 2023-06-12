const { getDB } = require('../db');

exports.getDummyData = async (req, res) => {
    const db = getDB();
    const users = await db.collection('user').find().toArray();
    res.send(users);
}

exports.setDummyData = async (req, res) => {
    const db = getDB();
    console.log('req.body', req.body);
    await db.collection('user').insertOne(req.body);
    res.sendStatus(200);
}
const { getDB } = require('../db');

exports.getDummyData = async (req, res) => {
    const db = getDB();
    const users = await db.collection('user').find().toArray();
    res.send(users.concat({name: 'Testing CI/CD'}));
    // res.send(["Deploy updated"]);
}

exports.setDummyData = async (req, res) => {
    const db = getDB();
    await db.collection('user').insertOne(req.body);
    res.sendStatus(200);
}

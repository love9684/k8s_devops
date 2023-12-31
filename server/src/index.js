const express = require('express');
const http = require('http');

const { mongoConnect } = require('./db');

const dummyRouter = require('./routes/DummyRoutes');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/dummy', dummyRouter);

mongoConnect(() => {
    server.listen(port, () => {
        console.log('Node app is listening on port:: ', port)
    })
})

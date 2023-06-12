const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');

const { mongoConnect } = require('./db');

const dummyRouter = require('./routes/DummyRoutes');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: false}));
app.use('/dummy', dummyRouter);
app.use(express.json());

mongoConnect(() => {
    server.listen(port, () => {
        console.log('Node app is listening on port: ', port)
    })
})

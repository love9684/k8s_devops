const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || 3000;
const router = express.Router()

router.get('/getDummyData', async (req, res) => {
    res.send([{name: 'lovelesh'}]);
})

app.use(express.json());
app.use(router)

server.listen(port, () => {
    console.log('Node app is listening on port: ', port)
})
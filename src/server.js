const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use('/static', express.static('src/tracks'));

const tracks = require('./routes/api/tracks');
app.use('/api/tracks', tracks);

const port = process.env.PORT || 8081;
app.listen(port, () => {
    console.log("Node js Server started");
});

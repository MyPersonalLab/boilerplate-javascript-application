const express = require('express');
const bodyParser = require("body-parser");
const app = express();

app.use(express.static('public'));

app.use(bodyParser.json())

app.get('/api/request/fields', (req, res) => {
    res.json(require('./fields.json')); 
});

app.listen(process.env.PORT || 3000);
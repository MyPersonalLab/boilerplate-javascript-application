const express = require('express');
const bodyParser = require("body-parser");
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json())

app.get('/api/request/fields', (req, res) => {
    res.json(require('./fields.json')); 
});

app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
});
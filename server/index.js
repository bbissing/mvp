const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const port = 3000;
const db = require('../database/index.js');
var bodyParser = require('body-parser');


app.use(cors({ origin: true }));
app.use(express.static('./client'));


app.get('/retrieve', (req, res) => {
  db.get((message) => { console.log(message); })
    .then(data => { res.send(data); })
    .catch(err => { res.send(err); });
});



app.listen(port, () => {
  console.log(`app listening on http://localhost:${port}/`);
});
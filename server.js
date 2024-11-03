const express = require('express');
const db = require('./db');
const app = express();
app.use(express.json());

app.get('/', function(req, res){
  res.send("hello server started!");
});

const person = require('./routes/personRoutes');
//use the router
app.use('/person', person);

app.listen(4000);
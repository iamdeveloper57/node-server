const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/personData';

mongoose.connect(url, {
    
});

const db = mongoose.connection;

db.on('connect', ()=>{
    console.log("db connected succes");
});

db.on ('error', ()=>{
    console.log("having error");
})

module.exports = db;
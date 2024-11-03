const mongoose = require('mongoose');

// const url = 'mongodb://localhost:27017/personData';
// const url = "mongodb+srv://dbuser:iamdbuser@cluster0.gxig0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const url = "mongodb+srv://agraharirehan57:thisismongodb@cluster0.45qqn.mongodb.net/"

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
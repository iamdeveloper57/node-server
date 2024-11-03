const mongoose = require('mongoose');

const personShema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    }, email: {
        type: String,
        required: true
    }
});

const person = mongoose.model("person", personShema);

module.exports = person;
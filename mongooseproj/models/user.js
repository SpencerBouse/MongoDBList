"use strict";

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: String,
    age: {
          type: Number,
          min: 0,
          max: 150
        },
    likesJS: Boolean
});

module.exports = mongoose.model('User', userSchema);

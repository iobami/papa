'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the image'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    imageUrl: {
        type: String,
        required: 'Kindly enter the link to the image'
    },
});

// Collection name is images
const collectionName = process.env.DB_COLLECTION_NAME;
const myTask = mongoose.model(collectionName, TaskSchema);

module.exports = myTask;

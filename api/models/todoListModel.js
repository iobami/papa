'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    name: {
        type: String,
        required: 'Kindly enter the name of the task'
    },
    Created_date: {
        type: Date,
        default: Date.now
    },
    status: {
        type: [{
            type: String,
            enum: ['pending', 'ongoing', 'completed']
        }],
        default: ['pending']
    }
});

// Collection name is images
const collectionName = process.env.DB_COLLECTION_NAME;
const myTask = mongoose.model(collectionName, TaskSchema);

module.exports = myTask;

'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const LeaderBoardSchema = new Schema({
    // SCHEMA SETUP FOR LEADER BOARD DB
});

// Collection name is images
const collectionName = process.env.DB_COLLECTION_NAME || '';
const board = mongoose.model(collectionName, LeaderBoardSchema);

module.exports = board;

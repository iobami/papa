'use strict';
const fs = require('fs');
const Papa = require('papaparse');
const path = require('path');

// const Board = require('../models/boardModel');

const readCsvData = async () => {
    try {
        let usersData = [];
        const filePath = path.join(__dirname, '../../db');
        const content = fs.readFileSync(filePath + '/hngLeaderBoard.csv', "utf8");
        await Papa.parse(content, {
            header: true,
            complete(data) {
                usersData = data.data;
            },
        });
        return usersData;
    } catch (e) {
        throw e.message;
    }
};

const leaderBoardList = async (req, res) => {
    try {
        const result = await readCsvData();
        res.json({result});
    } catch (e) {
        res.send(e);
    }
};

module.exports = {
    leaderBoardList,
};

'use strict';
const fs = require('fs');
const Papa = require('papaparse');

const Task = require('../models/todoListModel');

const list_all_tasks = (req, res) => {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};

const readCsvData = async () => {
    let usersData = [];
    const content = fs.readFileSync('/home/bambam/My Projects/API Tutorials/Ceph\'s Images API/db/hngLeaderBoard.csv', "utf8");
    await Papa.parse(content, {
        header: true,
        complete(data) {
            usersData = data.data;
        },
    });
    return usersData;
};

const leaderBoardList = async (req, res) => {
    // if (err)
    //     res.send(err);
    try {
        const result = await readCsvData();
        res.json({result});
    } catch (e) {
        res.send(e);
    }
};


const create_a_task = (req, res) => {
    const new_task = new Task(req.body);
    new_task.save(function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


const read_a_task = (req, res) => {
    Task.findById(req.params.id, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


const update_a_task = (req, res) => {
    Task.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};


const delete_a_task = (req, res) => {


    Task.deleteOne({
        _id: req.params.id
    }, function(err) {
        if (err)
            res.send(err);
        res.json({ message: 'Task successfully deleted' });
    });
};

module.exports = {
    list_all_tasks, create_a_task, read_a_task,
    update_a_task, delete_a_task, leaderBoardList
};

'use strict';
module.exports = function(app) {
    const todoList = require('../controllers/boardController');

    // Board Routes

    app.route('/api/v1/leaderBoard')
        .get(todoList.leaderBoardList);

};

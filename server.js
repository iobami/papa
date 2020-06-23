const express = require('express');
const bodyParser = require('body-parser');
// const mongoose = require('mongoose');
const cors = require('cors');
// require('dotenv').config();

const app = express().use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


const routes = require('./api/routes/boardRoutes'); //importing route
routes(app);


const port = process.env.PORT || 5000;

app.listen(port);

console.log('RESTful API server started on: ' + port);

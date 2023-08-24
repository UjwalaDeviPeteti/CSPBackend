const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const hygiene = require('./routes/hygiene');
const login = require('./routes/login');
const register1=require('./routes/register1');
const app = express();
app.use(cors());
app.use(bodyparser.urlencoded({ extended :  true}));
app.use(bodyparser.json());
app.use('/hygiene', hygiene);
app.use('/login', login);
app.use('/register1',register1);





module.exports = app;
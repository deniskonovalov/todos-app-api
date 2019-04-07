const express = require('express');
require('./config/config');
require('./db/mongoose');
const userRouter = require('./routers/user')

const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
  
app.use(express.json());
app.use(userRouter)

module.exports = app;

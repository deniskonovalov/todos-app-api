const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})
    
    res.status(200).send(tasks)
});

module.exports = router;

const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({})
    
    res.status(200).send(tasks)
});

router.post('/task', async (req, res) => {
    
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(200).send()
    } catch (e) {
        res.status(400).send(e)
    }
});

module.exports = router;

const express = require('express');
const Task = require('../models/task');
const router = new express.Router();

router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({'completed':false})
    
    res.status(200).send(tasks)
})

router.post('/task', async (req, res) => {
    const task = new Task(req.body)

    try {
        await task.save()
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.put('/task/edit/:id', async (req, res) => {
    try {
        const task = await Task.findOne({ _id   : req.params.id}, (err, task) => {
            if (err) return res.status(500).send(err)
            task.completed = !task.completed
            task.save()
        })
        res.status(200).send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/task/delete/:id', async (req, res) => {

    try {
        Task.findByIdAndRemove(req.params.id, (err, todo) => {
            if (err) return res.status(500).send(err)
                
            return res.status(200).send(todo);
        })
    } catch (e) {
        res.status(400).send(e)
    }
})

module.exports = router;

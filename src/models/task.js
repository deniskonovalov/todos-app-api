const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    userId: {
        type: String
    },
}, {
    timestamps: true
})

taskSchema.statics.getAll = async (email, password) => {
    const tasks = await Task.find({})

   return tasks
}

const Task = mongoose.model('Task', taskSchema)

module.exports = Task

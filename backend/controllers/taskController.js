const Task = require("../models/Task");

// Create Task
exports.createTask = async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.json(task);
};

// Get Tasks
exports.getTasks = async (req, res) => {
    const tasks = await Task.find({ boardId: req.params.boardId });
    res.json(tasks);
};

// Update Task (Drag & Drop)
exports.updateTask = async (req, res) => {
    const task = await Task.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.json(task);
};
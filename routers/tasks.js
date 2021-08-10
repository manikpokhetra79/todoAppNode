const express = require('express');
const router = express.Router();
const tasksController = require('../controllers/tasks_controller');

router.post('/add',tasksController.addTask);
router.get('/delete',tasksController.deleteTask);
module.exports= router;
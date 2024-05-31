
import express from 'express';
import { createTask, completeTask } from '../controllers/taskController.js';
const taskRouter = express.Router()

taskRouter.post('/new', createTask)
taskRouter.patch('/complete', completeTask)

export default taskRouter;

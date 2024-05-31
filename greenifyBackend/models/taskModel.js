import mongoose from "mongoose"
const Schema = mongoose.Schema;

const taskSchema = new Schema({
	task: { type: String, required: true },
});

const Task = mongoose.model('Task', taskSchema);

export default Task


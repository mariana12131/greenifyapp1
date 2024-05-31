import mongoose from "mongoose"

const Schema = mongoose.Schema;

const userTestSchema = new Schema({
	ident: { type: String, required: true },
	name: { type: String, required: true },
	status: { type: Boolean, default: false },
	score: { type: Number, min: 0, max: 5, default: 0 }
});

const userSchema = new Schema({
	name: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	currTask: { type: Object },
	historyTasks: { type: Array, default: [] },
	tests: { type: [userTestSchema], default: [] },
	__v: { type: Number, select: false }
});

const User = mongoose.model('User', userSchema);

export default User

import Task from "../models/taskModel.js";
import User from "../models/userModel.js";

const createTask = async (req, res) => {
	try {
		const userData = req.body

		const existingUser = await User.findOne({ email: userData.email });
		const randomTask = await Task.aggregate([{ $sample: { size: 1 } }]);

		if (!existingUser || !randomTask) {
			return res.status(400).json({ status: false, message: "User or Task not found!" });
		}

		existingUser.currTask = {
			descr: randomTask[0].task,
			complete: false,
			date: Date.now() + ""
		}

		await existingUser.save()

		return res.status(200).json({ status: true, message: "The user is authorized", user: existingUser })
	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
};

const completeTask = async (req, res) => {
	try {
		const userData = req.body

		const existingUser = await User.findOne({ email: userData.email });

		if (!existingUser || !existingUser.currTask) {
			return res.status(400).json({ status: false, message: "User or Task not found!" });
		}

		await User.updateOne({ email: userData.email }, { "currTask.complete": true });

		const updatedUser = await User.findOne({ email: userData.email })

		return res.status(200).json({ status: true, message: "Task completed!", user: updatedUser })
	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
};

export { createTask, completeTask }



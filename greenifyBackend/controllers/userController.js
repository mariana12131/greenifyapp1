import Test from "../models/testModel.js";
import User from "../models/userModel.js"
import mongoose from "mongoose";

const getAllTests = async () => {
	try {
		return await Test.find({});
	} catch (error) {
		return [];
	}
};

const registerUser = async (req, res) => {
	try {
		const userData = req.body

		const tests = await getAllTests();
		const userTests = tests.map(el => ({
			ident: el.ident,
			name: el.test,
			status: false,
			score: 0,
		}));

		const existingUser = await User.findOne({ email: userData.email });
		console.log(userData)
		if (existingUser) {
			return res.status(200).json({ status: false, message: "User already exists" });
		}

		const user = new User({ ...userData, tests: userTests });
		await user.save();
		return res.status(200).json({ status: true, message: "User created", user })
	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
};

const loginUser = async (req, res) => {
	try {
		const userData = req.body

		const existingUser = await User.findOne({ email: userData.email, password: userData.password });

		if (!existingUser) {
			return res.status(200).json({ status: false, message: "Incorrect login or password" });
		}

		if (existingUser.currTask && existingUser.currTask.date && !existingUser.historyTasks.find(el => el.date == existingUser.currTask.date)) {

			const currentDate = new Date();
			const currentTaskDate = new Date(+existingUser.currTask.date);

			if (currentDate.getFullYear() > currentTaskDate.getFullYear() ||
				(currentDate.getFullYear() === currentTaskDate.getFullYear() && currentDate.getMonth() > currentTaskDate.getMonth()) ||
				(currentDate.getFullYear() === currentTaskDate.getFullYear() && currentDate.getMonth() === currentTaskDate.getMonth() && currentDate.getDate() > currentTaskDate.getDate())) {
				existingUser.historyTasks.push(existingUser.currTask);
				existingUser.currTask = {};
			}
			await existingUser.save();
		}

		return res.status(200).json({ status: true, message: "The user is authorized", existingUser })

	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
};

export { registerUser, loginUser }


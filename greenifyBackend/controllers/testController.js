import Test from "../models/testModel.js";
import User from "../models/userModel.js";

function getRandomQuestions(questions, n) {
	const shuffled = [...questions].sort(() => 0.5 - Math.random());
	return shuffled.slice(0, n);
}

const getTest = async (req, res) => {
	try {
		const testIdent = req.params.ident

		const test = await Test.findOne({ ident: testIdent });

		if (!test) {
			return res.status(400).json({ status: false, message: "Wrong param!" });
		}

		const allQuestions = test.allQuestions;
		const randomQuestions = getRandomQuestions(allQuestions, 5);

		const testWithRandomQuestions = {
			...test.toObject(),
			allQuestions: randomQuestions
		};

		return res.status(200).json({ status: true, message: "Test sended", test: testWithRandomQuestions })
	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
}

const checkTestAnswers = async (req, res) => {
	try {
		const testIdent = req.params.ident
		const userAnswers = req.body.answers
		const userEmail = req.body.userEmail

		const test = await Test.findOne({ ident: testIdent });
		const user = await User.findOne({ email: userEmail });

		if (!test || !userAnswers || !user) {
			return res.status(400).json({ status: false, message: "Wrong param or body!" });
		}

		let correctAnswersCount = 0

		userAnswers.forEach(userAnswer => {
			const question = test.allQuestions.find(question => question.id == userAnswer.id);
			if (question && question.correctAnswer == userAnswer.answer) {
				correctAnswersCount++;
			}
		});

		const existingUserTest = user.tests.find((test) => test.ident == testIdent)

		existingUserTest.status = true;
		existingUserTest.score = correctAnswersCount;

		await user.save();

		return res.status(200).json({ status: true, message: "Answers checked and user updated", user, test: existingUserTest })
	} catch (error) {
		return res.status(400).json({ status: false, message: error })
	}
}

export { getTest, checkTestAnswers } 
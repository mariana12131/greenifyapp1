import mongoose from "mongoose"
const Schema = mongoose.Schema;

const questionSchema = new Schema({
	id: { type: String, required: true },
	question: { type: String, required: true },
	correctAnswer: { type: String, required: true },
	answers: { type: Object, required: true }
});

const testSchema = new Schema({
	ident: { type: String, required: true },
	test: { type: String, required: true },
	allQuestions: { type: [questionSchema], required: true }
});

const Test = mongoose.model('Test', testSchema);

export default Test


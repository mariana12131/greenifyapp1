import "./Test.scss"
import TestResult from "../TestResult/TestResult"
import { getTest, checkTest } from "../../../services/service"
import { useState } from "react"
import { Link } from "react-router-dom"

const Test = ({ user, setUser, testIdent, title }) => {
	const [test, setTest] = useState(null)
	const [activeTest, setActiveTest] = useState(false)
	const [message, setMessage] = useState("")
	const [answers, setAnswers] = useState([])
	const [testResult, setTestResult] = useState(null)

	const startTest = () => {
		getTest(testIdent)
			.then(data => {
				if (!data.status) {
					setMessage("Щось пішло не так... Спробуйте пізніше")
				} else {
					setMessage("")
					setTestResult(null)
					setTest(data.test)
				}
			})
			.catch((error) => {
				setMessage("Щось пішло не так... Спробуйте пізніше")
				console.log(error)
			})
		setActiveTest(true)
		document.body.style.overflow = "hidden"
	}

	const closeModal = () => {
		setActiveTest(false)
		document.body.style.overflow = ""
	}

	const endTest = (event) => {
		event.preventDefault()
		checkTest({ userEmail: user.email, answers }, testIdent)
			.then(data => {
				if (!data.status) {
					setMessage("Щось пішло не так... Спробуйте пізніше")
				} else {
					console.log(data)
					setTestResult(data.test.score)
					setUser(data.user)
				}
			}).catch((error) => {
				setMessage("Щось пішло не так... Спробуйте пізніше")
				console.log(error)
			})
	}

	const handleAnswerChange = (questionId, answer) => {
		setAnswers(prevAnswers => {
			const updatedAnswers = [...prevAnswers];
			const answerIndex = updatedAnswers.findIndex(ans => ans.id === questionId);
			if (answerIndex !== -1) {
				updatedAnswers[answerIndex].answer = answer;
			} else {
				updatedAnswers.push({ id: questionId, answer: answer });
			}
			return updatedAnswers;
		});
	}

	return (
		<section className="test">
			<div className="container">
				<h2>Прийміть виклик і перевірте свої знання!</h2>
				<p>Пройдіть тест на знання даної теми: <b>"{title}"</b> і перевірте себе. Дізнайтесь, на скільки кращими ви сьогодні стали.</p>
				<p style={{ color: "red" }}>{message && message}</p>
				{
					user ?
						<button className="btn" onClick={startTest}>Пройти тест</button> :
						<p className="notify">Для того щоб пройти тест, потрібно <Link to="/login">авторизуватись</Link></p>
				}

				<div className={`test__modal ${activeTest ? "active" : ""}`} >
					<div className="test__modal-window">
						<button className="close" onClick={closeModal}>&#10006;</button>
						{
							testResult || testResult === 0 ? <TestResult testResult={testResult} startTest={startTest} />
								:
								<div className="test__modal-wrapper">
									<h2>Дайте відповідь на 5 питань</h2>
									<form onSubmit={endTest}>
										{
											test ?
												test.allQuestions.map(({ question, id, answers, correctAnswer }, index) => {
													console.log(question)
													return (
														<div className="test__question" key={index + "-question-" + id}>
															<h3>{question}</h3>
															<div className="row">
																<input type="radio" name={id} id={id + 1} onChange={() => handleAnswerChange(id, 'a')} />
																<label htmlFor={id + 1}>a&#41; {answers.a}</label>
															</div>
															<div className="row">
																<input type="radio" name={id} id={id + 2} onChange={() => handleAnswerChange(id, 'b')} />
																<label htmlFor={id + 2}>b&#41; {answers.b}</label>
															</div>
															<div className="row">
																<input type="radio" name={id} id={id + 3} onChange={() => handleAnswerChange(id, 'c')} />
																<label htmlFor={id + 3}>c&#41; {answers.c}</label>
															</div>
															<div className="row">
																<input type="radio" name={id} id={id + 4} onChange={() => handleAnswerChange(id, 'd')} />
																<label htmlFor={id + 4}>d&#41; {answers.d}</label>
															</div>
														</div>
													)
												}) : ""
										}
										<p>{message && message}</p>
										<button className="btn">Перевірити</button>
									</form>
								</div>
						}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Test

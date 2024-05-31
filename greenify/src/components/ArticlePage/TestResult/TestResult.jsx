import { Link } from "react-router-dom"

const TestResult = ({ testResult, startTest }) => {

	const redirectHandler = () => {
		document.body.style.overflow = ""
	}

	const renderResultMessage = () => {
		if (testResult >= 0 && testResult <= 3) {
			return (
				<>
					<h3>Ви провалили тест</h3>
					<p>{testResult}/5 правильних відповідей.</p>
					<button className="btn" onClick={startTest}>Спробувати ще раз</button>
				</>
			);
		} else if (testResult === 4) {
			return (
				<>
					<h3>Ви пройшли тест - Добре!</h3>
					<p>4/5 правильних відповідей.</p>
					<Link className="btn" onClick={redirectHandler} to="/profile">В особистий кабінет</Link>
				</>
			);
		} else if (testResult === 5) {
			return (
				<>
					<h3>Ви пройшли тест - Відмінно!</h3>
					<p>5/5 правильних відповідей.</p>
					<Link className="btn" onClick={redirectHandler} to="/profile">В особистий кабінет</Link>
				</>
			);
		} else {
			return (
				<p>Щось пішло не так... Спробуйте ще раз!</p>
			);
		}
	};

	return (
		<div className="test__modal-result">
			{renderResultMessage()}
		</div>
	);
}

export default TestResult
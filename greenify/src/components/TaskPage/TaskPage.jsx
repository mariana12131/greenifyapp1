import "./TaskPage.scss"
import { getDailyTask } from "../../services/service"

const TaskPage = ({ user, setUser }) => {

	const generateTask = () => {
		getDailyTask({ email: user.email })
			.then(data => {
				if (!data.status) {
					window.alert("Щось пішло не так... Спробуйте пізніше")
					console.log(data)
				} else {
					setUser(data.user)
				}
			}).catch((error) => {
				window.alert("Щось пішло не так... Спробуйте пізніше")
				console.log(error)
			})
	}

	return (
		<section className="task">
			<div className="container">
				<h2>Екологічне завдання на день</h2>
				<p>Ласкаво просимо до денного екологічного виклику! <br />
					Тут ви отримаєте коротке, просте завдання, яке допоможе зробити нашу планету зеленішою та чистішою. Виконайте його та приєднуйтесь до руху за збереження навколишнього середовища! </p>

				{
					(user && user.currTask) ?
						<div className="task-descr">Сьогоднішнє завдання<br /><p>{user.currTask.descr}</p></div> :
						<button onClick={generateTask} className="btn">Отримати завдання</button>
				}

			</div>
		</section>
	)
}

export default TaskPage
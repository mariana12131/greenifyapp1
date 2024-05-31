import "./Profile.scss"
import { Link, useNavigate } from "react-router-dom"
import { useEffect } from "react";
import { completeTask } from "../../services/service";

const Profile = ({ user, setUser }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (!user) {
			navigate("/login")
		}
	}, [])

	const logOutHandler = () => {
		localStorage.removeItem("user-info")
		window.location.reload()
	}

	const convertDate = (time) => {
		let date = new Date(+time)

		let day = date.getDate().toString().padStart(2, '0')
		let month = (date.getMonth() + 1).toString().padStart(2, '0')
		let year = date.getFullYear()

		return `${day}.${month}.${year}`
	}

	const taskFinished = () => {
		completeTask({ email: user.email })
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
		<section className="profile">
			<div className="container">
				{
					user &&
					<div className="profile__wrapper">
						<div className="profile__header">
							<div className="row">
								<div className="profile__header-user">
									<div className="user__info">
										<h1>{user.name + " " + user.lastName}</h1>
										<p>{user.email}</p>
									</div>
									<button className="btn" onClick={logOutHandler}>Вийти з профілю</button>
								</div>
								<div className="profile__header-task">
									<div className="row">
										<h2>Завдання на сьогодні</h2>
										{
											user.currTask && <p
												className="task-status"
												style={user.currTask.complete ? { background: "#1EF10C" } : { background: "#FFE500" }}
											>{user.currTask.complete ? "Виконано" : "Очікує"}</p>
										}
									</div>
									{
										user.currTask ?
											<div className="task__user">
												<p>{user.currTask.descr}</p>
												{!user.currTask.complete && <button className="btn" onClick={taskFinished}>Завдання виконано</button>}
											</div> :
											<p>У вас ще немає завдання! <Link to="/task">Отримати завдання</Link></p>
									}
								</div>
							</div>
						</div>
						<div className="profile__main row">
							<div className="profile__main-test">
								<h2>Усі тестування</h2>
								<div className="test__list">
									{
										user.tests.sort((a, b) => +a.date - +b.date).map(test => {
											return (
												<div className="test__list-item" key={test._id}>
													<div className="row">
														<p className="test__label">Тест по розділу</p>
														<p
															className="test__status"
															style={
																test.status ?
																	(test.score > 3 ? { background: "#1EF10C" } : { background: "#F1430C" })
																	: { background: "#C8C8C8" }
															}
														>
															{
																test.status ? (test.score > 3 ? "Тест пройдено" : "Тест провалено") : "Не пройдено"
															}
														</p>
													</div>
													<h3>{test.name}</h3>
													<Link to={`/${test.ident}`} className="test-link">На сторінку з тестом</Link>
												</div>
											)
										})
									}
								</div>
							</div>
							<div className="profile__main-history">
								<h2>
									Історія виконаних завдань
								</h2>
								<div className="history__list">
									{
										(user.historyTasks && user.historyTasks.length > 0) ?
											user.historyTasks.map((task, i) => {
												return (
													<div className="history__list-item" key={"history-" + i}>
														<p className="task__descr">{task.descr}</p>
														<div className="row">
															<p className="task__date">{convertDate(task.date)}</p>
															<p className="task__status" style={task.complete ? { background: "#1EF10C" } : { background: "#F1430C" }}>
																{task.complete ? "Виконано" : "Не виконано"}
															</p>
														</div>
													</div>
												)
											})
											: <p>Історія відсутня</p>
									}
								</div>
							</div>
						</div>
					</div>
				}
			</div>
		</section >
	)
}

export default Profile
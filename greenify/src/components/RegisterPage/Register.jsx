import { Link, useNavigate } from "react-router-dom"
import { authUser } from "../../services/service"
import { useState, useEffect } from "react"

const RegisterPage = ({ user, setUser }) => {

	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/profile")
		}
	}, [user])

	const [formData, setFormData] = useState({
		name: "",
		lastName: "",
		email: "",
		password: ""
	})

	const [message, setMessage] = useState("")

	const handleAuthForm = (event) => {
		event.preventDefault()

		if (!formData.email || !formData.password || !formData.name || !formData.lastName) {
			setMessage("Ви маєте заповнити усі поля!")
			return
		}
		setMessage("")

		authUser("/user/register", formData).then(data => {
			if (!data.status) {
				setMessage("Користувач за таким email уже існує!")
			} else {
				setUser(data.user)
				navigate("/profile");
			}
		}).catch((error) => {
			setMessage("Щось пішло не так... Спробуйте пізніше")
			console.log(error)
		})
	}

	return (
		<section className="register">
			<div className="container">
				<div className="auth__wrapper">
					<form className="auth" onSubmit={handleAuthForm}>
						<h2>Зареєструватись</h2>
						<label htmlFor="form-login">Введіть Імя</label>
						<input
							required
							type="text"
							id="form-login"
							placeholder="Mariana"
							onChange={(event) => { setFormData(prevData => ({ ...prevData, name: event.target.value })) }}
						/>
						<label htmlFor="form-login">Введіть Прізвище</label>
						<input
							required
							type="text"
							id="form-login"
							placeholder="Onishkiv"
							onChange={(event) => { setFormData(prevData => ({ ...prevData, lastName: event.target.value })) }}
						/>
						<label htmlFor="form-login">Введіть Email</label>
						<input
							required
							type="email"
							id="form-login"
							placeholder="example@gmail.com"
							onChange={(event) => { setFormData(prevData => ({ ...prevData, email: event.target.value })) }}
						/>
						<label htmlFor="form-login">Введіть пароль</label>
						<input
							required
							type="text"
							id="form-login"
							placeholder="1234"
							onChange={(event) => { setFormData(prevData => ({ ...prevData, password: event.target.value })) }}
						/>
						<p className="message">{message && message}</p>
						<button className="btn">Зареєструватись</button>
						<p id="alternative-auth">Маєш акаунт? <Link to="/login" className="auth-link">Увійти</Link></p>
					</form>
				</div>
			</div>
		</section>
	)
}

export default RegisterPage
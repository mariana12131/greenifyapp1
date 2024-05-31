import { Link, useNavigate } from "react-router-dom"
import { authUser } from "../../services/service"
import { useState, useEffect } from "react"

const LoginPage = ({ user, setUser }) => {
	const navigate = useNavigate();

	useEffect(() => {
		if (user) {
			navigate("/profile")
		}
	}, [user])

	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	const [message, setMessage] = useState("")

	const handleAuthForm = (event) => {
		event.preventDefault()

		if (!formData.email || !formData.password) {
			setMessage("Ви маєте заповнити усі поля!")
			return
		}
		setMessage("")

		authUser("/user/login", formData).then(data => {
			if (!data.status) {
				setMessage("Не вірний логін або пароль!")
			} else {
				setUser(data.existingUser)
				navigate("/profile");
			}
		}).catch((error) => {
			setMessage("Щось пішло не так... Спробуйте пізніше")
			console.log(error)
		})
	}

	return (
		<section className="login">
			<div className="container">
				<div className="auth__wrapper">
					<form className="auth" onSubmit={handleAuthForm}>
						<h2>Увійти</h2>
						<label htmlFor="form-login">Введіть Email</label>
						<input
							type="email"
							id="form-login"
							placeholder="example@gmail.com"
							value={formData.email}
							required
							onChange={(event) => { setFormData(prevData => ({ ...prevData, email: event.target.value })) }}
						/>
						<label htmlFor="form-login">Введіть пароль</label>
						<input
							type="text"
							id="form-login"
							placeholder="1234"
							value={formData.password}
							required
							onChange={(event) => { setFormData(prevData => ({ ...prevData, password: event.target.value })) }}
						/>
						<p className="message">{message && message}</p>
						<button className="btn">Увійти</button>
						<p id="alternative-auth">Не маєш акаунту? <Link to="/register" className="auth-link">Зареєструватись</Link></p>
					</form>
				</div>
			</div>
		</section>
	)
}

export default LoginPage
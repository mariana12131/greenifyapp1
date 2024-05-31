import "./Hero.scss"

import { Link } from "react-router-dom"

const Hero = () => {
	return (
		<section className="hero">
			<div className="container">
				<div className="hero__content row">
					<h1>Змінюй світ <br />
						на краще!</h1>
					<p>Лише ти вирішуєш, яким буде наше майбутнє. <br /> Приєднуйся до нашого руху за збереження навколишнього середовища.</p>
					<Link to="/task" className="link btn">Отримати завдання на день</Link>
				</div>
			</div>
		</section>
	)
}

export default Hero
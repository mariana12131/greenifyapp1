import "./About.scss"
import { aboutImage1, aboutImage2, aboutImage3 } from "../../../services/images"

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="about__wrapper row">
					<div className="about__cards">
						<h2>Тут ви знайдете:</h2>
						<div className="about__cards-container">
							<div className="row">
								<img src={aboutImage1} alt="micro" />
								<div className="about__cards-descr">
									<h3>Інформацію та поради:</h3>
									<p>Поглиб свої знання про екологічні проблеми та дізнайся як ти можеш внести свій вклад у їх вирішення. Тут є інформація та  поради, які допоможуть вам стати екологічно свідомим</p>
								</div>
							</div>
							<div className="row">
								<img src={aboutImage2} alt="map" />
								<div className="about__cards-descr">
									<h3>Мапу для знаходження пунктів збору відходів:</h3>
									<p>Мапа покаже вам місця, де та коли можна здати вторинні ресурси на переробку або утилізацію.</p>
								</div>

							</div>
							<div className="row">
								<img src={aboutImage3} alt="calendar" />
								<div className="about__cards-descr">
									<h3>Події:</h3>
									<p>Будь завжи в курсі найближчих екологічних заходів, долучайся до цих ініціатив, знаходь там однодумців та ділись досвідом з іншими екологічно свідомими людьми</p>
								</div>
							</div>
						</div>
					</div>
					<div className="about__info">
						<h2>Про проєкт</h2>
						<p>Наша мета - зробити світ кращим для нас та майбутніх поколіннь, надихаючи та навчаючи людей берегти природу та приймати екологічно свідомі рішення.</p>
						<p>Ми віримо, що кожна дія має значення і кожен може внести свій внесок у збереження навколишнього  середовища. Цей проект пропонує ресурси та інструменти, щоб допомогти кожному зробити свій внесок у боротьбі за збереження нашої планети.</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default About
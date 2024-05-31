import "./EventsPage.scss"

import { event1, event2 } from "../../services/images"
import Event from "./Event/Event"

const EventsPage = () => {
	return (
		<section className="events">
			<div className="container">
				<div className="events__top">
					<h2>Найближчі екологічні події у Львові</h2>
					<p>Маєте інформацію про якусь екологічну подію або хочете організувати власну? <br />
						Ми завжди відкриті до співпраці для збереження навколишнього середовища!</p>
					<p>Пишіть нам на пошту: <a href="mailto:greenifyapp2024@gmail.com">greenifyapp2024@gmail.com</a></p>
				</div>
				<div className="events__container row">
					<Event info={{
						image: event1,
						title: "Екологічний ярмарок",
						text: "Буде представлено широкий асортимент еко-товарів, включаючи органічні продукти, вироби з натуральних матеріалів, відновлені предмети та вироби ручної роботи.",
						time: "16-18 червня 10:00 - 21:00",
						address: "Парк імені Івана Франка (вулиця Соломії Крушельницької, 11-13)"
					}} />
					<Event info={{
						image: event2,
						title: "Зелений день у Стрийському парку",
						text: "Будуть проводитись різноманітні активності, такі як майстер-класи з виготовлення власних еко-продуктів, прибирання парку, посадка дерев та інших рослин.",
						time: "20 червня 10:00 - 17:00",
						address: "Стрийський парк (вул. Стрийська, 15)"
					}} />
				</div>
			</div>
		</section>
	)
}

export default EventsPage
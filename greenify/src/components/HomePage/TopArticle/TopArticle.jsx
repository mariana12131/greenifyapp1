import "./TopArticle.scss"
import { topArticleImg } from "../../../services/images"
import { Link } from "react-router-dom"

const TopArticle = () => {
	return (
		<div className="article__top">
			<div className="row">
				<img src={topArticleImg} alt="topArticleImg" />
				<div className="article__top-info">
					<h2>Планета в небезпеці</h2>
					<p>Наша планета стикається з великою кількістю проблем. <br />
						Забруднення повітря, води, ґрунту, зміна клімату, втрата біорізноманіття — лише деякі з численних викликів, які ставлять під загрозу наше оточення. </p>
					<p>Переважно це є результатом діяльності людини. <br />
						Деякі люди навіть не задумуються над тим, що їхнє байдуже ставлення до природи, ігнорування проблем та небажання до дій призводить до негативних наслідків, які згодом можуть спричинити катастрофу.</p>
					<p>Розкриваючи ці проблеми та розуміючи їх наслідки, ми більш свідомо можемо діяти для збереження нашої планети. </p>
					<Link to="danger-planet" className="btn link">Детальніше</Link>
				</div>
			</div>
		</div>
	)
}

export default TopArticle
import "./Articles.scss"
import TopArticle from "../TopArticle/TopArticle"
import Article from "../Article/Article"

import { plantHomeImg, solarHomeImg, rubbishgyHomeImg } from "../../../services/images"

const Articles = () => {
	return (
		<section className="articles">
			<div className="container">
				<TopArticle />
				<div className="articles__more">
					<h2>Корисна інформація</h2>
					<div className="row">
						<Article info={{ link: "waste", title: "Відходи та їх обробка", li: ["Типи відходів", "Правила сортування", "Вплив на навколишнє середовище"], image: rubbishgyHomeImg }} />
						<Article info={{ link: "second-life", title: "Друге життя речей", li: ["Поради", "Ідеї", "Відео-добірка"], image: plantHomeImg }} />
						<Article info={{ link: "ecology", title: "Еко-альтернативи", li: ["Приклади", "Поради"], image: solarHomeImg }} />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Articles
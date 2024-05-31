import "./Article.scss"

import { Link } from "react-router-dom"

const Article = ({ info }) => {
	const { image, title, li, link } = info

	return (
		<div className="article__card">
			<img src={image && image} alt="" />
			<div className="article__card-descr">
				<h3>{title && title}</h3>
				<ul>
					{
						li && li.map((el, i) => {
							return (
								<li key={i + el}>{el}</li>
							)
						})
					}
				</ul>
				<Link to={link} className="btn link">Детальніше</Link>
			</div>
		</div>
	)
}

export default Article
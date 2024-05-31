import "./TopContent.scss"

const TopContent = ({ info }) => {
	const { title, image, text } = info
	return (
		<div className="article-page__top">
			<h2>{title && title}</h2>
			{
				text && text.map((el, i) => {
					return (
						<p key={i + title + "00"}>{el}</p>
					)
				})
			}
			<img src={image} alt="title" />
		</div>
	)
}

export default TopContent
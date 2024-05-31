import "./HomePage.scss"
import Hero from "./Hero/Hero"
import About from "./About/About"
import Articles from "./Articles/Articles"
import Ecology from "../ArticlePage/Ecology/Ecology"

const HomePage = () => {
	return (
		<main>
			<Hero />
			<About />
			<Articles />
		</main>
	)
}

export default HomePage
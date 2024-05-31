import Header from "../Header/Header"
import HomePage from "../HomePage/HomePage"
import Footer from "../Footer/Footer"
import DangerPlanet from "../ArticlePage/DangerPlanet/DangerPlanet"
import Waste from "../ArticlePage/Waste/Waste"
import SecondLife from "../ArticlePage/SecondLife/SecondLife"
import Ecology from "../ArticlePage/Ecology/Ecology"
import EventsPage from "../EventsPage/EventsPage"
import TaskPage from "../TaskPage/TaskPage"
import Map from "../MapPage/Map"
import LoginPage from "../LoginPage/Login"
import Profile from "../ProfilePage/Profile"
import RegisterPage from "../RegisterPage/Register"

import { Route, Routes, BrowserRouter } from "react-router-dom";
import { useState, useEffect } from "react"
import ScrollToTop from "../../services/scrollToTop"

const App = () => {
	const [user, setUser] = useState(null)

	return (
		<BrowserRouter>
			<ScrollToTop />
			<div id="wrap">
				<Header user={user} />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/danger-planet" element={<DangerPlanet user={user} setUser={setUser} />} />
					<Route path="/waste" element={<Waste user={user} setUser={setUser} />} />
					<Route path="/second-life" element={<SecondLife user={user} setUser={setUser} />} />
					<Route path="/ecology" element={<Ecology user={user} setUser={setUser} />} />
					<Route path="/events" element={<EventsPage />} />
					<Route path="/task" element={<TaskPage user={user} setUser={setUser} />} />
					<Route path="/map" element={<Map />} />
					<Route path="/login" element={<LoginPage user={user} setUser={setUser} />} />
					<Route path="/register" element={<RegisterPage user={user} setUser={setUser} />} />
					<Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
				</Routes>
			</div>
			<Footer />
		</BrowserRouter>
	)
}

export default App
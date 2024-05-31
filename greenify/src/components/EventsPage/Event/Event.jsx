import "./Event.scss"

import { eventIconTime, eventIconAddress } from "../../../services/images"

const Event = ({ info }) => {
	const { image, title, text, time, address } = info

	return (
		<div className="events__card">
			<img src={image} alt="" />
			<h3>{title}</h3>
			<p>{text}</p>
			<div className="events__card-info row">
				<img src={eventIconTime} alt="eventIconTime" />
				<p>{time}</p>
			</div>
			<div className="events__card-info row">
				<img src={eventIconAddress} alt="eventIconAddress" />
				<p>{address}</p>
			</div>
		</div>
	)
}

export default Event
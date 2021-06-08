import React from 'react';
import "./InfoCard.css"

const InfoCard = ({ info }) => {
	return (
<<<<<<< HEAD
		<div className='info-card'>
			<h4>{info.name}</h4>
			<a href={`${info.website}`} target='_blank' rel="noreferrer">link to website</a>
			<p>Phone Number: {info.phone}</p>
			<p>Address: {info.address}</p>
		</div>
	)
}
// {info.website}
export default InfoCard;
=======
		<div className="card col-3 h-100 card-info">
			<div className="card-body">
				<h5 className="card-title">{info.name}</h5>
				<p className="card-text">Phone Number: {info.phone}</p>
				<p className="card-text">Address: {info.address}</p>
				<a href={`${info.website}`} className="card-link" target='_blank' rel="noreferrer">{info.name}</a>
			</div>
		</div>
	)
}

export default InfoCard;
>>>>>>> 2d765fefa1f15464f7926e688a5378c96d20e530

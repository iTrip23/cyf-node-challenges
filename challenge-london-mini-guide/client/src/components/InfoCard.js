import React from 'react';
import "./InfoCard.css"

const InfoCard = ({ info }) => {
	return (
		<div className='info-card'>
			<h4>{info.name}</h4>
			<a href={`${info.website}`} target='_blank' rel="noreferrer">{info.name}</a>
			<p>Phone Number: {info.phone}</p>
			<p>Address: {info.address}</p>
		</div>
	)
}

export default InfoCard;
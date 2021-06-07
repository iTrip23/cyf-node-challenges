import React from 'react';
import "./InfoCard.css"

const InfoCard = ({ info }) => {
	return (
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
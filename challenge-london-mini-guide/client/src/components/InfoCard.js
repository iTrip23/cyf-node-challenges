import React from 'react';

const InfoCard = ({ info }) => {
	return (
		<div className='Info-Card'>
			<h4>{info.name}</h4>
			<a href={`${info.website}`} target='_blank' rel="noreferrer">{info.website}</a>
			<p>Phone Number: {info.phone}</p>
			<p>Address: {info.address}</p>
		</div>
	)
}

export default InfoCard;
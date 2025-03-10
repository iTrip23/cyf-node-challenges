import React from 'react';
import './Header.css';

const Header = ({ setCityName, cityData, setBusinessType }) => {
	const allCities = ['harrow', 'stratford', 'heathrow'];

	return (
		<header>
			<div className='first-layer'>
				<button className="btn btn-info btn-sm">Api Documentation</button>
				<select onChange={(e) => setCityName(e.target.value)}>
					{allCities.map((city, index) => <option key={index}>{city}</option>)}
				</select>
				{/* <div className="city-buttons">
					{allCities.map((city, index) => <button key={index} className="btn btn-info btn-sm"
						onClick={() => setCityName(city)}>{city}</button>)}
				</div> */}
			</div>
			<div className='business-buttons'>
				{cityData && Object.keys(cityData).map((category, index) => <button key={index} className="btn btn-info btn-sm"
					onClick={() => setBusinessType(category)}>{category}</button>)}
			</div>
		</header>
	)
}
export default Header;
import './Button.css'

const Button = ({ name, setBoroughInfo, cityName }) => {

	const getBusinessesInfo = async (businessType) => {
		const response = await fetch(`http://localhost:3003/${cityName}/${businessType}`)
		const data = await response.json();
		setBoroughInfo(data);
	}

	return (
		<button onClick={() => getBusinessesInfo(name)} className='btn-type-business'>{name}</button>
	)
}

export default Button;
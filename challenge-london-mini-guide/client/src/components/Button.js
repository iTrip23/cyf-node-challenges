const Button = ({ name, setBoroughInfo, cityData }) => {
	return (
		<button onClick={() => setBoroughInfo(cityData[name])}>{name}</button>
	)
}

export default Button;
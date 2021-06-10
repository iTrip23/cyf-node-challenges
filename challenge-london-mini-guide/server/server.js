const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3005;

const corsOptions = {
	origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: true }));

const stratford = require('../data/Stratford.json');
const harrow = require('../data/Harrow.json');
const heathrow = require('../data/Heathrow.json');

const allCitiesData = { stratford, harrow, heathrow };

app.get('/allcities', (req, res) => res.send(allCitiesData));

app.get('/:city/', (req, res) => {
	const ifFound = Object.keys(allCitiesData).includes(req.params.city);
	if (ifFound) {
		res.status(200).send(allCitiesData[req.params.city]);
	} else {
		res.status(404).send(`Not a valid city,\n PLease choose one of these ${Object.keys(allCitiesData)}`)
	}
});

app.get('/:city/:category', (req, res) => {
	const ifFound = Object.keys(allCitiesData[req.params.city]).includes(req.params.category);
	if (ifFound) {
		res.status(200).send(allCitiesData[req.params.city][req.params.category]);
	} else {
		res.status(404).send(`Not a valid category,\n PLease choose one of these ${Object.keys(allCitiesData[req.params.city])}`)
	}
})


app.listen(PORT, (req, res) => console.log(`App is working on ${PORT}`));
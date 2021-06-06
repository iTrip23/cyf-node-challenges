const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3003;

const corsOptions = {
	origin: 'http://localhost:3000'
}

app.use(cors(corsOptions));

// app.use(express.urlencoded({ extended: true }));

const stratford = require('../data/Stratford.json');
const harrow = require('../data/Harrow.json');
const heathrow = require('../data/Heathrow.json');

const allCities = [stratford, harrow, heathrow];

app.get('/allcities', (req, res) => res.send(allCities));

// Stratford
app.get('/stratford', (req, res) => res.send(stratford));
app.get('/stratford/pharmacies', (req, res) => res.send(stratford.pharmacies));
app.get('/stratford/hospitals', (req, res) => res.send(stratford.hospitals));
app.get('/stratford/doctors', (req, res) => res.send(stratford.doctors));
app.get('/stratford/colleges', (req, res) => res.send(stratford.colleges));

// Harrow
app.get('/harrow', (req, res) => res.send(harrow));
app.get('/harrow/pharmacies', (req, res) => res.send(harrow.pharmacies));
app.get('/harrow/hospitals', (req, res) => res.send(harrow.hospitals));
app.get('/harrow/doctors', (req, res) => res.send(harrow.doctors));
app.get('/harrow/colleges', (req, res) => res.send(harrow.colleges));

// Heathrow
app.get('/heathrow', (req, res) => res.send(heathrow));
app.get('/heathrow/pharmacies', (req, res) => res.send(heathrow.pharmacies));
app.get('/heathrow/hospitals', (req, res) => res.send(heathrow.hospitals));
app.get('/heathrow/doctors', (req, res) => res.send(heathrow.doctors));
app.get('/heathrow/colleges', (req, res) => res.send(heathrow.colleges));

app.listen(PORT, (req, res) => console.log(`App is working on ${PORT}`));
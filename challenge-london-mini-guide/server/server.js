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

app.get('/stratford', (req, res) => res.send(stratford));

app.get('/stratford/pharmacies', (req, res) => res.send(stratford.pharmacies));

app.get('/stratford/hospitals', (req, res) => res.send(stratford.hospitals));

app.get('/stratford/doctors', (req, res) => res.send(stratford.doctors));

app.get('/stratford/colleges', (req, res) => res.send(stratford.colleges));




app.listen(PORT, (req, res) => console.log(`App is working on ${PORT}`));
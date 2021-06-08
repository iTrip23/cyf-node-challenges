
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const fs = require("fs");
const PORT = process.env.PORT || 3003;

const corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));
let cities = [];
const directoryPath = path.join(__dirname + "../../", "data");
// directoryPath = `../${directoryPath}`;
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log("Unable to scan directory: " + err);
  }
  //listing all files using forEach
  files.forEach(function (file) {
    // Do whatever you want to do with the file
    console.log(file);
    cities.push(file.split(".")[0]);
    console.log(cities);
  });
});
// app.use(express.urlencoded({ extended: true }));

const stratford = require("../data/Stratford.json");
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");

// const allCitiesData = [stratford, harrow, heathrow];
const newCitiesData = {
  stratford: stratford,
  harrow: harrow,
  heathrow: heathrow,
};
app.get("/allcities", (req, res) => res.send(allCitiesData));
// const functionApi = (newCitiesData) => {
  for (const [cityName, cityJson] of Object.entries(newCitiesData)) {
    app.get(`/${cityName}`, (req, res) => res.send(cityJson));
    app.get(`/${cityName}/pharmacies`, (req, res) =>
      res.send(cityJson.pharmacies)
    );
    app.get(`/${cityName}/hospitals`, (req, res) => res.send(cityJson.hospitals));
    app.get(`/${cityName}/doctors`, (req, res) => res.send(cityJson.doctors));
    app.get(`/${cityName}/colleges`, (req, res) => res.send(cityJson.colleges));
  }
// };

// // Stratford
// app.get("/stratford", (req, res) => res.send(stratford));
// app.get("/stratford/pharmacies", (req, res) => res.send(stratford.pharmacies));
// app.get("/stratford/hospitals", (req, res) => res.send(stratford.hospitals));
// app.get("/stratford/doctors", (req, res) => res.send(stratford.doctors));
// app.get("/stratford/colleges", (req, res) => res.send(stratford.colleges));

// // Harrow
// app.get("/harrow", (req, res) => res.send(harrow));
// app.get("/harrow/pharmacies", (req, res) => res.send(harrow.pharmacies));
// app.get("/harrow/hospitals", (req, res) => res.send(harrow.hospitals));
// app.get("/harrow/doctors", (req, res) => res.send(harrow.doctors));
// app.get("/harrow/colleges", (req, res) => res.send(harrow.colleges));

// // Heathrow
// app.get("/heathrow", (req, res) => res.send(heathrow));
// app.get("/heathrow/pharmacies", (req, res) => res.send(heathrow.pharmacies));
// app.get("/heathrow/hospitals", (req, res) => res.send(heathrow.hospitals));
// app.get("/heathrow/doctors", (req, res) => res.send(heathrow.doctors));
// app.get("/heathrow/colleges", (req, res) => res.send(heathrow.colleges));

app.listen(PORT, (req, res) => console.log(`App is working on ${PORT}`));

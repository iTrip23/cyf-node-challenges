import "./App.css";
import { useState, useEffect } from "react";
import Button from "./components/Button.js";
import InfoCardContainer from "./components/InfoCardContainer.js";

function App() {
  const [cityData, setCityData] = useState(null);
  const [boroughInfo, setBoroughInfo] = useState(null);
  const [cityName, setCityName] = useState("harrow");

  const allCities = ["harrow", "stratford", "heathrow"];

  const getData = async (cityName) => {
    const response = await fetch(`http://localhost:3003/${cityName}`);
    const data = await response.json();
    setCityData(data);
  };

  useEffect(() => {
    try {
      getData(cityName);
    } catch (error) {
      console.error(error);
    }
  }, [cityName]);

  return (
    <div className="App">
      <div className="dropdown">
        <select
          onChange={(e) => {
            setCityData(e.target.value);
            setCityName(e.target.value);
          }}
        >
          {allCities.map((elem, index) => (
            <option key={index} value={elem}>
              {elem}
            </option>
          ))}
        </select>
      </div>

      <div className="button-container">
        {cityData === null ? (
          <h1>Loading...</h1>
        ) : (
          Object.keys(cityData).map((elem, index) => (
            <Button
              name={elem}
              key={index}
              setBoroughInfo={setBoroughInfo}
              cityName={cityName}
            />
          ))
        )}
      </div>

      <InfoCardContainer boroughInfo={boroughInfo} />
    </div>
  );
}

export default App;

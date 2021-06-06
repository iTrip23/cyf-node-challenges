import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button.js';
import InfoCard from './components/InfoCard.js';

function App() {
  const [cityData, setCityData] = useState(null);
  const [boroughInfo, setBoroughInfo] = useState(null);

  const allCities = ['harrow', 'stratford', 'heathrow'];

  const getData = async ({ cityData }) => {
    const response = await fetch(`http://localhost:3003/${cityData}`)
    const data = await response.json();
    setCityData(data);
  }

  useEffect(() => {
    try {
      getData({ cityData })
    } catch (error) {
      console.error(error)
    }
  }, [cityData])

  return (
    <div className="App">
      <div className='dropdown'>
        <select onChange={(e) => setCityData(e.target.value)}>
          {allCities.map((elem, index) => <option key={index} value={elem}>{elem}</option>)}
        </select>
      </div>
      <div className='button-container'>
        {cityData === null ? <h1>Loading...</h1> : Object.keys(cityData).map((elem, index) => <Button
          name={elem} key={index} setBoroughInfo={setBoroughInfo} cityData={cityData} />)}
      </div>
      <div className='info-card-container'>
        {boroughInfo && boroughInfo.map((elem, index) => <InfoCard info={elem} key={index} />)}
      </div>
    </div>
  );
}

export default App;

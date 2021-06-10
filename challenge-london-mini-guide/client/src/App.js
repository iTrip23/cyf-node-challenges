import './App.css';
import { useState, useEffect } from 'react';
import InfoCardContainer from './components/InfoCardContainer.js';
import Header from './components/Header';
import Main from './components/Main';

function App() {

  const [cityData, setCityData] = useState(null);
  const [boroughInfo, setBoroughInfo] = useState(null);
  const [cityName, setCityName] = useState('harrow');
  const [businessType, setBusinessType] = useState('doctors');

  const getData = async (cityName) => {
    const response = await fetch(`http://localhost:3005/${cityName}`)
    const data = await response.json();
    setCityData(data);
  }

  const getBusinessesInfo = async (businessType) => {
    const response = await fetch(`http://localhost:3005/${cityName}/${businessType}`)
    const data = await response.json();
    setBoroughInfo(data);
  }

  useEffect(() => {
    try {
      getData(cityName)
      getBusinessesInfo(businessType)
    } catch (error) {
      console.error(error)
    }
  }, [cityName, businessType])

  return (
    <div className="App">
      <Header setCityName={setCityName} cityData={cityData} setBusinessType={setBusinessType} />
      <Main cityName={cityName} businessType={businessType} />
      <InfoCardContainer boroughInfo={boroughInfo} />
    </div>
  );
}

export default App;

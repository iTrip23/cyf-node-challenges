import './App.css';
import { useState, useEffect } from 'react';
import Button from './components/Button.js';

function App() {
  const [stratfordData, setStratfordData] = useState(null);
  // const [] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:3003/stratford')
      const data = await response.json();
      setStratfordData(data);
    }
    try {
      getData()
    } catch (error) {
      console.error(error)
    }
  }, [stratfordData])

  return (
    <div className="App">
      <div className='button-container'>
        {stratfordData === null ? <h1>Loading...</h1> : Object.keys(stratfordData).map((elem, index) => <Button name={elem} key={index} />)}
      </div>

    </div>
  );
}

export default App;

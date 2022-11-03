import React, {useState} from 'react';
import './App.css';
import CovidInfo from './CovidInfo';
function App() {
  const [country, setCountry] = useState("");
  const countrySelected = (childData) => {
    console.log(childData)
    setCountry(childData)
  }
  return (
    <div className='App'>
    <h1 className='Covid'> 
     COVID-19 LIVE TRACKER APP USING REACT
      </h1>
      {country}
      <CovidInfo country={country}></CovidInfo>
    </div>
  )
}

export default App;

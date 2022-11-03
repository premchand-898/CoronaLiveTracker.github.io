import React, { useEffect, useState } from "react";
import './CovidInfo.css';
function CovidData() {
  const [country, setCountry] = useState("");
  const [cases, setCases] = useState("");
  const [recovered, setRecovered] = useState("");
  const [deaths, setDeaths] = useState("");
   const [critical, setCritical] = useState("");
  const [population, setPopulation] = useState("");
  const [userInput, setUserInput] = useState("");
  
  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
  
  const setData = ({
    country,
    cases,
    deaths,
    recovered,
    critical,
    population,
  }) => {
    setCountry(country);
    setCritical(critical);
    setCases(cases);
    setRecovered(recovered);
    setDeaths(deaths);
    setPopulation(population);
  };
  
  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };
  const handleSubmit = (props) => {
    props.preventDefault();
    fetch(`https://disease.sh/v3/covid-19/countries/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };
  
  return (
    <div>
      <h1>COVID-19 CASES COUNTRY WISE</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {/* input county name */}
          <input className="Search" onChange={handleSearch} placeholder="Enter Country Name" />
          <button className="Search-1" type="submit">Search</button>
        </form>
      </div>
      {/* Showing the details of the country */}
      <div>
        <h2 className="covidData">
        <p className="red">Country Name : {country} </p>
        <p className="color">Total Critical : {critical}</p>
        <p className="color">Total Cases : {cases}</p>
        <p className="color">Total Deaths : {deaths}</p>
        <p className="color">Total Recovered : {recovered}</p>
        <p className="color">Total population : {population}</p>
        </h2>
      </div>
    </div>
  );
}

export default CovidData
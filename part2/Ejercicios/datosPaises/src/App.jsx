import { useState, useEffect } from 'react'
import axios from 'axios'

const Filter = ({ filter, onChange }) => ( 
  <div>
    find countries <input value={filter} onChange={onChange} />
  </div>
)

const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [weather, setWeather] = useState(null);

  const filteredCountries = countries.filter(c =>
    c.name.common.toLowerCase().includes(filter.toLowerCase())
  ); 

  useEffect(() => {
    axios.get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => setCountries(response.data));
  }, []);

  useEffect(() => {
    if (filteredCountries.length !== 1) return;
  
    const country = filteredCountries[0];
    if (!country.capital) return;
  
    const apiKey = '4a481d888bdcf3496eeed5efd986ea89';
    const capital = country.capital[0];
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${apiKey}&units=metric`;
  
    axios.get(url).then(response => setWeather(response.data));
  }, [filteredCountries]);   

  let countriesDisplay;

  if (filteredCountries.length > 10) {
    countriesDisplay = <p>Too many matches, specify another filter</p>;
  } else if (filteredCountries.length > 1) {
    countriesDisplay = filteredCountries.map(country => (
      <div>
        <p key={country.cca3}>{country.name.common}
        <button onClick={() => setFilter(country.name.common)}>show</button>
        </p>
      </div>
    ));
  } else if (filteredCountries.length === 1) {
    const country = filteredCountries[0];
    countriesDisplay = (
      <div>
        <h2>{country.name.common}</h2>
        <p>Capital:{country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages</h3>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        {weather && (
          <div>
            <h3>Weather in {country.capital}</h3>
            <p>Temperature: {weather.main.temp} °C</p>
            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt={weather.weather[0].description} />
            <p>Wind: {weather.wind.speed} m/s</p>            
          </div>
        )}
      </div>
    );
  }

  return (
    <div>
      <Filter filter={filter} onChange={(e) => setFilter(e.target.value)} />
      {countriesDisplay}
    </div>
  )

}

export default App
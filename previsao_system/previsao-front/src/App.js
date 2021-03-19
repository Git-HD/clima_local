import React, { useState } from 'react';
import { ApiWeather } from './api/ApiWeather';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  
  const search = async (e) => {
      if(e.key === 'Enter') {
          const data = await ApiWeather(query);
          
          setWeather(data);
          setQuery('');

          function hide() {
            let element = document.getElementById("head");
            element.classList.remove('header');
            document.getElementsByTagName('h1')[0].style.display = 'none';
          }

          hide();

          function send() {

            var today = new Date();
            var expiry = new Date(today.getTime() + 30 * 24 * 3600 * 1000); // plus 30 days

            function setCookie(name, value)
            {
                document.cookie=name + "=" + escape(value) + "; path=/; expires=" + expiry.toGMTString();
            }

                setCookie("nome", data.name);
                setCookie("pais", data.sys.country);
                setCookie("temperatura", data.main.temp);
                setCookie("descricao", data.weather[0].description);
            
            
          }
          send()
      }
  }


  return (
      <div className="main-container">
          <div className="header text-white" id="head">
            <h1 className="text-white">Pequise o clima da sua região</h1>
          </div>
          <input type="text" className="search"placeholder="Procurar..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
          {weather.main && (
              <div className="city">
                  <h2 className="city-name">
                      <span>{weather.name}</span>
                      <sup>{weather.sys.country}</sup>
                  </h2>
                  <div className="city-temp">
                      {Math.round(weather.main.temp)}
                      <sup>&deg;C</sup>
                  </div>
                  <div className="info">
                      <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />
                      <p>{weather.weather[0].description}</p>
                  </div>
                  <div className="add">
                      <p>Deseja registrar os dados? </p>
                      <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                  </div>
              </div>
          )}
      </div>
  );
}



export default App;
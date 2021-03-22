import React, { useState } from 'react';
import { ApiWeather } from './api/ApiWeather';
import { Busca } from './api/ApiWeather';

const App = () => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});
  const [day, setDay] = useState([]);
  
  const search = async (e) => {
      if(e.key === 'Enter') {

         const data = await Busca(query);

          setWeather(data);
          setQuery('');

          console.log(data);

          if (data.cod == 404) {
              alert('Esta cidade não existe!')
          } else {
            var dayHour1 = data.list[0].dt_txt;
            var first = /^[^\s]*/;
            var day1 = dayHour1.match(first);

            var dayHour2 = data.list[5].dt_txt;
            var day2 = dayHour2.match(first);

            var dayHour3 = data.list[16].dt_txt;
            var day3 = dayHour3.match(first);

            var dayHour4 = data.list[21].dt_txt;
            var day4 = dayHour4.match(first);

            var dayHour5 = data.list[32].dt_txt;
            var day5 = dayHour5.match(first);
            
            var days = []

            days.push(day1, day2, day3, day4, day5);

            setDay(days);

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

                    setCookie("nome", data.city.name);
                    setCookie("pais", data.city.country);
                    setCookie("temperatura", data.list[0].main.temp);
                    setCookie("descricao", data.list[0].weather[0].description);
                
                
            }
            send()
        }
      }
  }


  return (
      <div className="main-container">
          <div className="header text-white" id="head">
            <h1 className="text-white">Pequise o clima da sua região</h1>
          </div>
          <input type="text" className="search"placeholder="Procurar..."value={query}onChange={(e) => setQuery(e.target.value)}onKeyPress={search}/>
          {weather.list && (
              <div className="container">
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        {/* <sup>{weather.sys.country}</sup> */}
                        <sup>18:00</sup>
                    </h2>
                    <h5>Dia: <span>{day[0]}</span></h5>
                    <div className="city-temp">
                        {/* {Math.round(weather.main.temp)} */}
                        {Math.round(weather.list[0].main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[0].weather[0].icon}@2x.png`} />
                        {weather.list[0].weather[0].description.toUpperCase()}
                        {/* <p>{weather.weather[0].description}</p> */}
                    </div>
                    <div className="add">
                        <p>Deseja registrar os dados? </p>
                        <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                    </div>
                </div>
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        <sup>09:00</sup>
                    </h2>
                    <h5>Dia: <span>{day[1]}</span></h5>
                    <div className="city-temp">
                        {Math.round(weather.list[5].main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                        <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[5].weather[0].icon}@2x.png`} />
                        {weather.list[5].weather[0].description.toUpperCase()}
                    </div>
                    <div className="add">
                        <p>Deseja registrar os dados? </p>
                        <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                    </div>
                </div>
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        <sup>18:00</sup>
                    </h2>
                    <h5>Dia: <span>{day[2]}</span></h5>
                    <div className="city-temp">
                        {Math.round(weather.list[16].main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[16].weather[0].icon}@2x.png`} />
                        {weather.list[16].weather[0].description.toUpperCase()}
                    </div>
                    <div className="add">
                        <p>Deseja registrar os dados? </p>
                        <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                    </div>
                </div>
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        <sup>09:00</sup>
                    </h2>
                    <h5>Dia: <span>{day[3]}</span></h5>
                    <div className="city-temp">
                       {Math.round(weather.list[21].main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[21].weather[0].icon}@2x.png`} />
                        {weather.list[21].weather[0].description.toUpperCase()}
                    </div>
                    <div className="add">
                        <p>Deseja registrar os dados? </p>
                        <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                    </div>
                </div>
                <div className="city">
                    <h2 className="city-name">
                        <span>{weather.city.name}</span>
                        <sup>18:00</sup>
                    </h2>
                    <h5>Dia: <span>{day[4]}</span></h5>
                    <div className="city-temp">
                        {Math.round(weather.list[32].main.temp)}
                        <sup>&deg;C</sup>
                    </div>
                    <div className="info">
                    <img className="city-icon" src={`https://openweathermap.org/img/wn/${weather.list[32].weather[0].icon}@2x.png`} />
                        {weather.list[32].weather[0].description.toUpperCase()}
                    </div>
                    <div className="add">
                        <p>Deseja registrar os dados? </p>
                        <a href="http://localhost:8000/weather" className="btn btn-primary col-md-offset-3 col-md-12">Adicionar</a>
                    </div>
                </div>
              </div>
          )}
      </div>
  );
}



export default App;
import axios from 'axios';

// const URL = 'https://api.openweathermap.org/data/2.5/forecast';
// const API_KEY = '0935476700f34732922d7f91d44ce422';

// export const ApiWeather = async (query) => {
//     const { data } = await axios.get(URL, {
//         params: {
//             q: query,
//             units: 'metric',
//             APPID: API_KEY,
//         }
//     });

//     return data;
// }

const URL_PREVISAO = 'http://localhost:8000/api/buscaprevisao/'

export const Busca = async (query) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({"cidade": query});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    const data = await fetch(URL_PREVISAO, requestOptions)
    .then((response) => {
        if(response.ok) {
          return response.json();
        } 
      })
    .then((result) => { return result })
    .catch(error => console.log('error', error));
    return data
}
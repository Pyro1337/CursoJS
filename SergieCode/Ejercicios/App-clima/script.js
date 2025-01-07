// Definimos la API_KEY y la urlBase
let API_KEY = '79010463693b57048471facd2d149d7f';
let urlBase = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";
//Seteamos donde se escribira el resultado
let dataField = document.getElementById("WeatherData");

function fetchWeatherInfo(city_name){
    
    fetch(`${urlBase}?q=${city_name}&appid=${API_KEY}`, {
        mode: 'cors',
        method: "GET",
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            dataField.innerHTML = `
                <p><strong>Ciudad:</strong> ${data.name}</p>
                <p><strong>Temperatura:</strong> ${(data.main.temp - 273.15).toFixed(2)}°C</p>
                <p><strong>Humedad:</strong> ${data.main.humidity}%</p>
                <p><strong>Descripción:</strong> ${data.weather[0].description}</p>
                
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
            `;
            })
        .catch(error => console.error('Error:', error));
}
//Para mostrar el icono usamos https://openweathermap.org/img/wn/CodigoQueDevuelveel[${data.weather[0].icon]@2x.png
//hacemos la funcion para ver lo que captura el boton
function searchCity() {
    let city_name = document.getElementById("ciudadEntrada").value;//capturamos el valor del nombre de la ciudad
    fetchWeatherInfo(city_name);
}

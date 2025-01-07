// Definimos la API_KEY y la ciudad
let API_KEY = '79010463693b57048471facd2d149d7f';
let city_name = 'London';
let urlBase = "https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather";

// Prueba de que trae algo
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
    .then(json => console.log(json))
    .catch(error => console.error('Error:', error));

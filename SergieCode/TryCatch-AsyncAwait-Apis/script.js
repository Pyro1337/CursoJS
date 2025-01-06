/*
XMLHTTPREQUEST
const API_URL = 'https://jsonplaceholder.typicode.com/';

let xhr = new XMLHttpRequest(); // Declaramos la variable para consumir la API

// Utilizamos una función para el RequestHandler
function onRequestHandler() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.response);
        const HTMLResponse = document.querySelector('#app'); // Obtenemos el elemento del DOM para mostrar la información
        HTMLResponse.innerHTML = ''; // Limpiamos el contenido anterior, si existe

        // Generamos la lista de nombres y correos
        data.forEach(user => {
            HTMLResponse.innerHTML += `<li>${user.name} - ${user.email}</li>`;
        });
    }
}

// Abrimos la conexión y llamamos al onRequestHandler
xhr.addEventListener('load', onRequestHandler);
xhr.open('GET', `${API_URL}users`);
xhr.send();
*/

//FETCH
//Utilizaremos FETCH para consumir APIS pero en este caso combinaremos el uso de async y await junto con try catch.

//Primero vamos a crear la funcion para consumir API's en este caso es una funcion asincrona.
async function consumirAPI() {
    let API_URL = 'https://jsonplaceholder.typicode.com/';

    //Utilizamos try para tratar de consumir la api y catchearla en caso de errores.
    try{
        //Realizamos la solicitud mediante fetch
        const response = await fetch(`${API_URL}users`); 

        //Validamos que la respuesta este OK 
        if(!response.ok){
            throw new Error('Error al consumir la API');

        }

        //Parseamos la respuesta como json
        const datoFinal = await response.json();

        //Mostramos la informacion en el DOM del HTML
        //Primero mostramos en consola
        console.log(datoFinal);

        //Luego mostramos en el HTML
        const HTMLResponse = document.querySelector('#app');
        HTMLResponse.innerHTML = '';

        //Generamos la lista de nombres y correos
        datoFinal.forEach(user => {
            HTMLResponse.innerHTML += `<li>${user.name} - ${user.email}</li>`;
        })

    }catch(error){
        console.error("Error al consumir la API", error);
        //Mostrar un mensaje de error en el DOM del HTML
        const HTMLResponse = document.querySelector('#app');
        HTMLResponse.innerHTML = `<h2>Error al consumir la API</h2>`;
    }
}

//llamamos a la funcun para consumir la API
consumirAPI();
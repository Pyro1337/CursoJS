const API_KEY = '8e25ebb3245e8cb9779785862cc53cd3'; // Reemplaza con tu API Key válida
const urlBase = 'https://api.themoviedb.org/3/search/movie';
let showResult = document.getElementById('results');

// Escucha el evento del botón de búsqueda
document.getElementById('searchButton').addEventListener('click', searchMovies);

function searchMovies() {
    // Obtén el valor del campo de entrada
    let searchInput = document.getElementById('searchInput').value.trim();
    
    if (searchInput === "") {
        showResult.innerHTML = "<p style='color: red;'>Por favor ingresa un título para buscar.</p>";
        return;
    }

    // Llama a la API de TMDB
    fetch(`${urlBase}?api_key=${API_KEY}&query=${encodeURIComponent(searchInput)}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error en la solicitud: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            // Verifica si se encontraron resultados
            if (data.results.length === 0) {
                showResult.innerHTML = "<p style='color: red;'>No se encontraron resultados para esta búsqueda.</p>";
                return;
            }

            // Toma el primer resultado y muestra su información
            const movie = data.results[0];
            showResult.innerHTML = `
                <p><strong>Título:</strong> ${movie.title.toUpperCase()}</p>
                <p><strong>Lenguaje:</strong> ${movie.original_language.toUpperCase()}</p>
                <p><strong>Popularidad:</strong> ${movie.popularity}</p>
                <p><strong>Promedio de votos:</strong> ${movie.vote_average}</p>
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            showResult.innerHTML = "<p style='color: red;'>Hubo un error al procesar la búsqueda.</p>";
        });
}

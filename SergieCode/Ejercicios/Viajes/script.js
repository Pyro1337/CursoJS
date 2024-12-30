import { barcelona, roma, paris, londres } from "./ciudades.js"; //importamos mediante desestructuracion de datos.

//Obtenemos los elementos del DOM [HTML]
//Filtrando mediante un QuerySelectorAll para obtener todos los <a> osea enlaces.
let enlaces = document.querySelectorAll("a"); //basicamente tomamos y filtramos por los enlaces.
let tituloDOM = document.getElementById("titulo");
let subTituloDOM = document.getElementById("subtitulo");
let parrafoDOM = document.getElementById("parrafo");
let precioDOM = document.getElementById("precio");


//Evento al clickear el enlace
enlaces.forEach(function (enlace){ //recorremos todos los enlaces.
    enlace.addEventListener('click', function() {
        //Removemos la clase active de todos los enlaces
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active');
        });
        //Agregamos la clase active al enlace actual
        this.classList.add('active'); //this se refiere al elemento que estamos tocando.
        //Obtenemos el contenido correspondiente a la ciudad seleccionada
        let contenido = obtenerContenido(this.textContent);
        //Actualizamos los elementos del DOM con la informacion de la ciudad seleccionada
        tituloDOM.textContent = contenido.titulo;
        subTituloDOM.textContent = contenido.subtitulo;
        parrafoDOM.textContent = contenido.parrafo;
        precioDOM.textContent = contenido.precio;
    });
    });

    function obtenerContenido(enlace){
        let contenido = {
            'Barcelona':barcelona,
            'Roma':roma,    
            'París':paris,
            'Londres':londres
        };
        return contenido[enlace];
    }
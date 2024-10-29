//Eventos del DOM
/*Accion o suceso que ocurre en la web, se puede desencadenar por una accion del usuario o propia de la pagina, se puede capturar mediante JS. */
function mostrarMensaje(){
    let mensaje = document.getElementById('fechaYHora').innerHTML = "Hola";
    
}
// function ocultarFechaYHora(){
//     let mensaje = document.getElementById('fechaYHora').innerHTML = "";
    
// }

function pulsaBoton(){
    let mensaje = document.getElementById('fechaYHora');
    mensaje = alert("Boton Pulsado");
}

//Escapear  mediante \
let string = 'Prueba de Can\'t reproducir this'
console.log(string);

//Utilizar salto de lineas en strings
let cadena = 'Prueba de cadena \n con salto de linea';
console.log(cadena);

//Borrar espacios mediante \b 
let cad= 'Prueba de borrado de espacios \b Hola';
console.log(cad);

//Contar la longitud de un string
//Cuenta los espacios en blanco.
let cadena3= 'Prueba de longitud de una cadena';
console.log(cadena3.length);

//Recortar una cadena, que saque la palabra RECORTE
let text ='Recorte de una cadena';
//text.slice(Inicio,Final);
console.log (text.slice(0,7));

//convertir a todas minusculas, a mayusculas
let text2 = 'Prueba de Mayusculas';
let text3 = 'Prueba de minusculas';
console.log(text2.toUpperCase());
console.log(text3.toLowerCase());

//Acoplar un string a otro
let string1 = 'Hola';
let string2 = 'Mundo';
let unionStrings = string1.concat(" ").concat(string2).concat(" XD");
console.log(unionStrings);
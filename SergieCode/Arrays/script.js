/*Metodos Filter, Map, Fill, Find, findIndexOf, Some, Every, pop, Shift */


//Filter, basicamente hace una busqueda de lo que queremos dentro del array.
//array.filter(x => x == 'ElementoBusqueda');
//En este caso la x es como un parametro de la funcion.
const array = ['HTML', 'CSS', 'JS', 'PHP', 'SQL'];
const resultado = array.filter( x => x == 'JS');
console.log(resultado);

//Map
//Nos sirve para hacer un replace, supongamos que queremos cambiar SQL por C#
console.log("Uso del map \n");
const array2 = ['HTML', 'CSS', 'JS', 'PHP', 'SQL'];
console.log(array2);
const resultado2 = array2.map( x => x.replace('SQL','C#'));
console.log(resultado2);

//Fill
//Nos sirve para rellenar un array con un valor.
console.log("Uso de FILL");
const array3 = ['naranja', 'pera', 'manzana'];
console.log(array3.fill('Mango',1));

//Find
//Busca un elemento dentro del array.
let boolResultado = false;
console.log('Uso de FIND');
const array4 = ['naranja', 'pera', 'manzana'];
console.log(array4);
if(array4.find(x => x =='naranja')){
    boolResultado = true;
}
console.log("Se encontro naranja? : "+boolResultado);

//FindIndexOf
//Busca un elemento dentro del array y devuelve su posicion.

console.log('Uso de FIND INDEX OF');
const array5 = ['naranja', 'pera', 'manzana'];
console.log(array4);
console.log("Encontramos pera en la posicion : "+array4.findIndex(x => x == 'pera'));

//Some
//Busca un elemento dentro del array y nos retorna un booleano.
console.log('Uso de SOME');
const array6 =['naranja', 'pera', 'manzana'];
console.log(array6);
console.log("Se encontro el valor de Pera almenos una vez? : "+array6.some(x => x == 'pera'));

//Every
//Busca un elemento dentro del array y si todos coinciden nos retorna un booleano TRUE.
console.log('Uso del EVERY');
const array7 = ['pera', 'pera', 'pera'];
console.log(array7)
console.log("Todos los elementos son Pera? : "+array7.every(x => x =='pera'));

function showDate(){
    //Una vez hayamos pulsado y mostrado cambiamos a Ocultar Fecha el nombre del boton
     let contenidoBoton = document.getElementById("btnAction").textContent;
     if(contenidoBoton == "Mostrar Fecha"){
        document.getElementById("fechas").innerHTML = new Date();
        contenidoBoton = document.getElementById("btnAction").textContent = "Ocultar Fecha";
     }else{
        hideDate();
        contenidoBoton = document.getElementById("btnAction").textContent = "Mostrar Fecha";
     }
    
}
//Esta funcion se llama cada que vez se quiera ocultar el contenido de la fecha.
function hideDate(){
    document.getElementById("fechas").innerHTML = "";
}

console.log("Extraccion de partes de una fecha")
let fechaActual = new Date();
console.log("El dia es : "+fechaActual.getDay());
console.log("El mes es : "+fechaActual.getUTCMonth());
console.log("El año es : "+fechaActual.getFullYear());


//Metodos MATH
console.log("Metodos Math");
console.log(Math.PI); //devuelve el numero PI
console.log(Math.E); //Devuelve el numero Euler
console.log(Math.abs(-10)); //devuelve el valor absoluto (sin signo)
console.log(Math.pow(2,3));//devuelve 2 elevado a la 3
console.log(Math.sqrt(9));//devuelve la raiz cuadrada de 9
console.log(Math.min(1,2,3,4,5,6,7,8,9,10)); //trae el minimo
console.log(Math.max(1,2,3,4,5,6,7,8,9,10));//trae el maximo
console.log(Math.random());//trae numero random
console.log(Math.round(3.2)); //trae el numero redondeado en este caso 3
console.log(Math.round(3.7)); //trae el numero redondeado en este caso 4

console.log("Aqui inicia el repaso de Bucles");
let vectores = ['Java','CSS','Jscript','C#'];
for (let index = 0 ; index < vectores.length; index++){
    console.log(vectores[index]);
}

var vector2 = [1,2,3,4,5,6,7,8,9,10];
let contador = 0;
while(contador <= 10){
    console.log(vector2[contador]);
    contador++
}

let objetoPrueba ={
    nombre : "Ivan",
    edad : 27,
    estado : "Casado",
    hijos : 2,
    lenguajes : ["HTML","CSS","Javascript","Java","Python"]

}
for (let elemento in objetoPrueba)  {
    console.log(elemento);
}

//Sets Y Maps

//SET
/*Un set es una coleccion de elementos de tipo especial
Que no posee claves, donde cada valor puede aparecer una sola vez. 
Sus principales métodos son:
new Set([iterable]) – crea el set. El argumento opcional es un objeto iterable (generalmente un array) con los valores para inicializarlo.
set.add(valor) – agrega un valor, y devuelve el set en sí.
set.delete(valor) – elimina el valor, y devuelve true si el valor existía al momento de la llamada; si no, devuelve false.
set.has(valor) – devuelve true si el valor existe en el set, si no, devuelve false.
set.clear() – elimina todo el continido del set.
set.size – es la cantidad de elementos*/

let sett = new Set(['Pedro','Ricardo','Pedro', 'Irving','Jose','Pedro']);
sett.add('Sergio','Ricardo');
console.log(sett);

//Map
/*Map es, al igual que Objet, una colección de datos identificados por claves. 
La principal diferencia es que Map permite claves de cualquier tipo.

Los métodos y propiedades son:
new Map() – crea el mapa.
map.set(clave, valor)) – almacena el valor asociado a la clave.
map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
map.has(clave) – devuelve true si la clave existe en map, false si no existe.
map.delete(clave) – elimina el elemento con esa clave.
map.clear() – elimina todo de map.
map.size – tamaño, devuelve la cantidad actual de elementos. */

//Se declara de esta forma
let mapa = new Map();
//se mapea clave,valor
mapa.set('1','String');
mapa.set(1, 'number1');
mapa.set(true, 'boolean');
//se obtiene como un objeto mediante get.
console.log(mapa.get(1));
console.log(mapa.get('1'));
console.log(mapa.get(true));

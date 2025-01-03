//Declaramos un String.
let texto  = 'Hola Mundo me llamo Ivan, chamaquito programador ya tu sabe'
let busqueda = texto.search(/programador/);
console.log(busqueda);

//Modificadores
//i : Ignora mayusculas y minusculas
//g : Busca todas las coincidencias
//m : Busca todas las coincidencias en multiples lineas
//s : Busca todas las coincidencias en multiples lineas

//Expresiones Regulares
let pattern = /programador/gi;
console.log(texto.match(pattern));
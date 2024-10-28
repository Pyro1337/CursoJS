
//Clase 2- Primitivos
let numero = 10;
//let nombre = 'Ivan';
let verdadero = true;
let falso = false;
let noDefinido = undefined;
let nulo = null;
/*
Tipos de Datos Primitivos
Number,String,Boolean,Undefined,Null
Tipos de datos de referencia
Array,Object,Functions,Clases
Tener en cuenta que los tipos de datos se pueden guardar en Stacks y Heaps
Los heaps utilizan referencia por endes son mas rapidos pueden crecer y achicarse a medida que se necesite, basicamente
en los heaps se buscan por referencias y se saltan a otro bloque de memoria, en cambio los primitivos ya tienen un lugar asignado*/

//Clase 3 -  Constantes.
const numeroDos = 35;
//numeroDos = 15; arrojara error pues al estar definido como const y no como let entonces es una constante.
//console.log(numeroDos);

/*Tipado estatico vs Dinamico
Dinamico : Permiten cambiar los valores de las variables por ej:
String nombre = hola;
nombre = 42; no dara error
Estatico : Se debe cargar datos unicamente con lo que es el tipo de dato.
Javascript es Dinamico.  */

//Clase 4 - Tipado Dinamico
//Para saber que tipo de dato es una variable se puede utilizar un console.log junto con un typeof(variable).
let number = 3;
let phrase = 'Prueba de una frase larga para Jscript';
let bool = true;
let undef = undefined;
number =53;
console.log(typeof(number)); //arroja tipo numerico.
console.log(typeof(phrase)); //arroja cadena.

//Clase 5 - Comentarios , se hacen con // o con /*varias lineas*/.


//Clase 6 - Objetos.
/*Agrupacion de datos que tienen sentido tenerlos juntos
para definir un objeto se utiliza {} en su declaracion*/
let nombre = 'Ivan';
let apellido = 'Sanchez';
let edad = 23;

let personaNormal = {
    nombre,apellido,edad
};
console.log(personaNormal);
/*En consola se obtiene lo siguiente : {nombre: 'Ivan', apellido: 'Sanchez', edad: 23}*/
//Tambien se puede rellenar dentro del objeto en forma clave : valor
let personaPrueba = {
    nombre: 'Pepe',
    apellido : 'Zarate',
    edad: 32
}
console.log(personaPrueba.nombre+"\n"+personaPrueba.apellido+"\n"+personaPrueba.edad); //devuelve Pepe Zarate 32, no en forma de clave valor pues no se imprime como objeto sino como elementos del objeto.
//Tambien se puede ingresar como un array es decir objeto[VariableBusqueda]
let personaPrueba2 = {
    nombre: 'Pepe',
    apellido : 'Zarate',
    edad: 32
}
console.log(personaPrueba2['nombre']+personaPrueba2['apellido']+personaPrueba2['edad'])


//Para modificar
personaPrueba2.nombre = 'Zac';
personaPrueba2.apellido = 'Efron';
personaPrueba2.edad = 41;
console.log(personaPrueba2)
//O tambien se usa para modificar
personaPrueba2['nombre'] = 'Pepito';
console.log(personaPrueba2);

//Para Eliminar
delete personaPrueba2.edad;
console.log(personaPrueba2);


//Clase 7 - Arrays.
let animales = ['Chancho','Caballo','Perro'];
console.log(animales);
/*Arroja en consola
 (3) ['Chancho', 'Caballo', 'Perro']
0:"Chancho" 1:"Caballo" 2:"Perro" length:3
Si queremos solamente imprimir uno en especifico lo hacemos por su posicion por ej:
console.log(animales[0]); imprimiria chancho.*/

//Para modificar
animales[0] = 'Gato';
console.log(animales[0]);

//Clase 8 Funciones o procedimientos.
//Clase 9 Funciones con argumentos.
/*function nombreFuncion() {
    se escribe codigo...
}

*/
//Function que no devuelve nada.
function saludarConsola(){
    console.log("Hola Mundo")
}
saludarConsola();
//Function que devuelve algo.
function sumarNumeros(numero1,numero2){
    return numero1+numero2
}
let  num1 = 32;
let num2 = 42;
let resultado = sumarNumeros(num1,num2);
console.log('El resultado de la suma entre '+num1+" y "+num2+" es de "+resultado);
//Clase 10 Declaraciones y Expresiones
/*Expresiones , Declaraciones(let, const, function , function*, async function , class, export, import.), Statements(if,for,else,switch) */
//Una expresion es cualquier linea de codigo que se evalua en un valor.

//Clase 11 Operadores en Javascript.
/*Operadores > aritmeticos,Asignacion,Comparacion,Logicos,Bitwise */
//Operadores aritmeticos.
let a = 5;
let b = 7;
console.log(a+b); //adicion
console.log(a-b); //resta
console.log(a*b); //multiplicacion
console.log(a/b); //division
console.log(a%b); //modulo
console.log(a**b) //Potencia
//Incremento y decremento
console.log(++a);
console.log(--a);


//Operadores de asginacion
let c = 3;
c = c + 5;
console.log(c);

//Operadores de comparacion > , < , >= , <= , !=, ==
if (c >= 5){
    console.log("Es mayor o igual a 5");
}else{
    console.log("No cumple la condicion");
}

//Operadores Logicos
//AND &&, OR || , NOT !
console.log(true && false);
console.log(true || false);
console.log(!true);

//Short Circuit - Corto circuito.

//Bitwise
//Bit: Digito en binario, 0 o 1
//Byte : 8bits 00000000 -> 0
//Byte : 8bits 00000001 -> 1

//Orden de operaciones se pueden modificar segun los parentesis, los operadores matematicos o logicos tienen su propio orden, pero prevalece el parentesis.

//Operadores Ternarios.
// expresion ? 'Se ejecuta si es true' : 'Se ejecuta si es false'
edad = 17;
let acceso = edad >= 18 ? 'Permitiremos ingreso' : 'Denegamos el acceso';
console.log(acceso);

//Operador IF
if(edad >=18){
    console.log('Es mayor de edad en PY');
}else{
    console.log('Es menor de edad en PY');
}

//Operador while
let contador = 0;
while(contador <=10){
    console.log(contador);
    contador++;
}

//Operador Do While
contador = 0;
console.log("Operador Do-While");
do{
    console.log(contador);
    contador++;
}while(contador <=10);
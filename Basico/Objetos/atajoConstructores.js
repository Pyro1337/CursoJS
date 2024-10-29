let obj = {}; //Crea un objeto en vacio, pero al comprobar en nuestra consola de chrome tenemos una propiedad que todos los objetos tienen un objeto.Constructor que nos permite crear un objeto vacio y en base a ese constructor. o podemos hacerlo
let object = new Object(); //para crearlo
//Tambien existen los siguientes
/*
    new Array(); []
    new String ();
    new Number();
    new Boolean();
    new Function();
    new Date();
    new RegExp();
    new Error();
    new EvalError();
    new RangeError();
    new ReferenceError();
    new SyntaxError();
    new TypeError();
    new URIError();
 */
//Veamos que contiene nuestro constructor creado de manera normal tambien en chrome que si consultamos el typeOf(''); nos devuelve string , pero si hacemos un typeof(new String()) este nos devuelve que es un objeto. ya que esta implementado nativamente para array,string,number etc...

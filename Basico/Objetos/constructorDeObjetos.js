//Por convencion los desarrolladores usan PascalCase para los nombres de los objetos es decir por ejemplo: function UserObject(){} para los constructores.
//Creamos e inicializamos el constructor.
function Usuario(){
    this.id = 1;
    this.recuperarClave = function(){} //metodo del objeto
}
let user = new Usuario();
console.log(user);

//la palabra reservada new nos permite crear el objeto en base a lo que definimos en el constructor.
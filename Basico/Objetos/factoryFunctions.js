//Factory Function nos permite acortar procesos mediante una funcion, por ejemplo si vamos a crear objetos Usuario, y vamos a crear varios , para no tener la necesidad de crear 3 o 4, podemos usar una funcion y llamarla para hacer la declaracion de la misma.

/*user = {
    id : 1,
    name : 'Ivan',
    email : '0PcK7@example.com',
    save : function(){
        console.log("Guardando ",user.name);
    }
}
user2 = {
    id : 2,
    name : 'Pepe',
    email : 'WKZK7@example.com',
    save : function(){
        console.log("Guardando ",user.name);
    }
} */

//En vez de eso podemos directamente crear una funcion que cree a los usuarios.
function createUser(name,email){
    return {
        name : name,
        email : email,
        activo : true,
        save : function(){
            console.log("Guardando ",user.name);
        }
    };
}

//Creamos los usuarios.
let user1 = createUser('Ivan','0PcK7@example.com');
let user2 = createUser('Pepe','WKZK7@example.com');
console.log("El primer usuario es : "+user1);
console.log("El segundo usuario es : "+user2);
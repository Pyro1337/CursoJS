fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))

//Ahora utilizamos querys para mostrar especificamente datos.
console.log("Prueba de envio de Querys para usuario 1");
fetch('https://jsonplaceholder.typicode.com/users/5')
.then(response => response.json())
.then(json => console.log(json));

//Ahora utilizamos querys para mostrar especificamente datos que contenga el userId = 4
console.log("Prueba de envio de Querys para usuario 1");
fetch('https://jsonplaceholder.typicode.com/todos?userId=4')
.then(response => response.json())
.then(json => console.log(json));

//Armando el Query correctamente ya que lo anterior esta hardcodeado.
let url = "https://jsonplaceholder.typicode.com";
let query = "todos?userId=3";
//Ahora realizamos el fetch una vez tengamos las variables declaradas con las url y query.
fetch(`${url}/${query}`)
.then(response => response.json())
.then(json => console.log(json));

//Veamos ahora las distintas llamadas que podemos hacer o consultas a la API

//GET : Pedir informacion
let urlBase = "https://jsonplaceholder.typicode.com";
let queryConsul = "todos?userId=2";
//Ahora realizamos el fetch una vez tengamos las variables declaradas con las url y query.
fetch(`${urlBase}/${queryConsul}`)
.then(response => response.json())
.then(json => console.log(json));

//POST : Enviar informacion
//Probemos enviando informacion en POSTEOS.
/*
let urlBasePost = "https://jsonplaceholder.typicode.com";
let queryPost =  "posts";
fetch(`${urlBasePost}/${queryPost}`,{
    method : "POST",
    body: JSON.stringify({
        title: "Post de prueba",
        body : "Este es un post de prueba",
        userId: 666
    }),
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
})
    .then(response => response.json())
    .then(json => console.log(json));*/

//POST pero mas simplificado.
let urlBasePost = "https://jsonplaceholder.typicode.com";
let queryPost =  "posts";
let requestBody = {
    title : "Prueba de POST [Insertar]",
    body : "If we ever broke up",
    userId : 132
}
//Realizamos ahora el fetch
fetch(`${urlBasePost}/${queryPost}`,{
    method: "POST",
    headers:{
        'Content-type': 'application/json; charset=UTF-8',
    },
    body : JSON.stringify(requestBody)
})
    .then(response => response.json())
    .then(json => console.log(json) );

//PUT : Editar informacion
//Para editar informacion utilizamos el metodo PUT de la siguiente manera.
let urlBasePut = "https://jsonplaceholder.typicode.com";
let queryPut = "posts/1"; //vamos a editar el post con id 1
let requestBodyPut = {
    title: "Edicion 1",
    body : "Prueba de edicion 1 que se centrara en la edicion de un post",
    userId : 666
}
//Ahora realizamos el fetch
fetch(`${urlBasePut}/${queryPut}`,{
    method: "PUT",
    headers : {
        'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(requestBodyPut)
})
    .then(response => response.json())
    .then(json => console.log(json));

//PATCH : editar informacion pero solo edita un atributo.
//Por ejemplo para editar una descripcion de una tarea en bittrix o trello se usa el metodo PATCH.
console.log("Prueba de PATCH")
let urlBasePatch = "https://jsonplaceholder.typicode.com";
let queryPatch = "posts/2"; // vamos a editar un unico atributo del POST con ID 1
//Realizamos el fetch sin el requestBodyPatch porque solo queremos editar un atributo.
fetch(`${urlBasePatch}/${queryPatch}`,{
    method: "PATCH",
    headers:{
        'Content-type': "application/json",
    },    
    body: JSON.stringify({
        body: "Prueba de edicion con PATCH",
    }),
})
    .then(response => response.json())
    .then(json => console.log(json));


//DELETE : para borrar informacion
console.log("Prueba del metodo DELETE");
let urlBaseDelete = "https://jsonplaceholder.typicode.com";
let queryDelete = "posts/7";
fetch(`${urlBaseDelete}/${queryDelete}`,{
    method: "DELETE",
})
    .then(response => {
        if(response.ok){
            console.log("Se ha borrado el post con ID 7");
        }else{
            console.log("No se ha podido borrar el post con ID 7");
        }
    })
    .catch(error => console.log("Ha ocurrido un error en la solicitud",error));
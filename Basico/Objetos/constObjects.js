const user = {id : 1}; //Creamos un objeto const que en teoria no se puede modificar

//Agregamos una nueva propiedad al objeto user.
user.name = "Ivan"; //Ingresamos una propiedad nueva
//Aqui incluimos una nueva funcion que seria guardar.
user.guardar = function(){
    console.log("Guardando ",user.name);
}
user.guardar();
//Lo que si no me va permitir es hacer user = 1; es decir ese valor de esa variable lo que no se puede cambiar pero si se puede modificar, agregar y eliminar propiedades de ese objeto.
//Creamos un objeto
const user = {
    id : 1,
    name : 'Ivan',
    email : '0PcK7@example.com'
};

//Listamos las propiedades del objeto
console.log(Object.keys(user));
//Es como basicamente Object.keys(ObjetoAlQueQuieroListarLasPropiedades)
//Si queremos listarlo de otras formas utilizamos
for(let llave of Object.keys(user)){
    console.log(llave,": "+user[llave]);
}


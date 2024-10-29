/*Crera un algoritmo que tome un array de objetos y devuelva un array de pares */
let array = [
    {
        id: 1,
        nombre: 'Ivan'
    },
    {
        id: 2,
        nombre: 'Luis'
    },
    {
        id: 3,
        nombre: 'Carlos'
    }
];
toPairArrays(array);
function toPairArrays(array){
    let arrayPares = [];
    for(let i = 0 ; i < array.length ; i++){
        console.log(array[i]);
        arrayPares.push(array[i]);
    }
    return arrayPares
}
console.log(toPairArrays(array));

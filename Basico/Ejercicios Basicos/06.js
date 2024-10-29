//Crea un algoritmo que devuelva la cantidad de positivos de un array
function cantidadPositivos(array){
    let cantidadPositivos = 0;
    for(let i = 0 ; i< array.length; i++){
        if(array[i] > 0){
            cantidadPositivos++;
        }
    }
    return cantidadPositivos
}
let array = [-3,-5,-10,0,5,50,100,1030];
console.log("La cantidad de positivos es "+cantidadPositivos(array));
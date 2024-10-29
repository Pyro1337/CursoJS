//Enviar por parametro un array y validar que el indice no sea menor a cero y que el elemento exista en el array

function validarArray(array,indice){
    //Que no sea menor, y que no este fuera del indice.
    if(indice < 0 || indice >= array.length){
        return 'El indice no existe';
    }else{
        return array[indice];
    }
}

arreglo = [1,2,3,4,5,6,7,8,9,10];
let resultado = validarArray(arreglo,2);
console.log(resultado);
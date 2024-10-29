/*Crea un algoritmo que imprima el menor valor y el mayor de un array */
function devuelveMenorMayor(arreglo){
    let menor = arreglo[0];
    let mayor = arreglo[0];
    for(let i = 0 ; i < arreglo.length ; i++){
        if(arreglo[i] < menor){
            menor = arreglo[i];
        }
        if(arreglo[i] > mayor){
            mayor = arreglo[i]
        }
    }
    console.log('El mayor es : '+mayor+" y el menor es :"+menor);
}
array = [-3,-5,-10,0,5,50,100,1030];
devuelveMenorMayor(array);
//Cual es mayor
//Dado dos variables determinar cual es el mayor mediante una funcion.
function quienEsMayor (numero1,numero2){
    if(numero1 > numero2){
        return numero1
    }else if (numero2 > numero1){
        return numero2
    }else{
        return "Los numeros son iguales"
    }
}

let a = 5;
let b = 8;
//let b = 5; caso igual

console.log(quienEsMayor(a,b));

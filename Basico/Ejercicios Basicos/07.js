//Crea un algoritmo que devuelva el precio del producto mas el impuesto
function precioConImpuesto(precio,impuesto){
    return (precio + impuesto/100*precio);
}
let precioOriginal = 100;
let impuesto = 10;
console.log("El precio con impuesto es "+precioConImpuesto(precioOriginal,impuesto)+" dolares");
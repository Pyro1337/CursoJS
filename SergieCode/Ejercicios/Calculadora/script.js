function accionarBoton(botonPulsado){
    let pantalla = document.getElementById('pantalla');
    pantalla.value += botonPulsado; //iremos concatenando lo que pulsemos
};

function limpiarPantalla(){
    let pantalla = document.getElementById('pantalla');
    pantalla.value = "";
};

function calcular(dato){
    const calcularValor = document.getElementById('pantalla').value;
    console.log(calcularValor);
    const resultado = eval(calcularValor);
    return document.getElementById('pantalla').value = resultado;
}
    
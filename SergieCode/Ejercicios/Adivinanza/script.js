function checkNumber(){
    //Math.Floor permite redondear el numero
    //Math.Random()* (FINAL - INICIO) + INICIO;
    let randomNumber = Math.floor(Math.random()*(100 - 1) + 1);
    console.log("Prueba :"+randomNumber);
     //Procedemos a la extraccion y verificamos si el numero esta entre ese rango
    let numeroIntroducido = document.getElementById('numeroEntrada').value;//extraemos el valor
    if(numeroIntroducido < 1 || numeroIntroducido >100){
        alert("El valor introducido debe estar entre 1 y 100");
    }
    let campoMensaje = document.getElementById("mensaje");
    //Ahora procedemos a lo del juego
    if(numeroIntroducido > randomNumber){
        campoMensaje.innerHTML = "El valor ingresado es superior al esperado, intentelo de nuevo";

    }
    else if(numeroIntroducido < randomNumber){
        campoMensaje.innerHTML = "El valor ingresado es menor al esperado, intentelo de nuevo";
    }
    else if(numeroIntroducido == randomNumber){
        campoMensaje.innerHTML = "Felicidades! ha acertado el numero";
    }
}
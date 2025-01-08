document.getElementById("Formulario").addEventListener("submit", (event) => {
    // Escuchamos el evento de envío del formulario
    event.preventDefault(); // Evitamos que la página se recargue al enviar el formulario

    // Validamos campo nombre
    let nameField = document.getElementById('name');
    let errorName = document.getElementById('nameError');
    if (nameField.value.trim() === "") { // trim elimina espacios en blanco
        errorName.textContent = "El nombre es requerido";
        errorName.classList.add("error-message");
    } else {
        errorName.textContent = "";
        errorName.classList.remove("error-message");
    }

    // Validamos campo correo electrónico
    let emailField = document.getElementById('email');
    let errorEmail = document.getElementById('emailError');
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex corregido
    if (!emailRegex.test(emailField.value.trim())) { // trim elimina espacios en blanco
        errorEmail.textContent = "El correo electrónico es requerido y debe ser válido";
        errorEmail.classList.add("error-message");
    } else {
        errorEmail.textContent = "";
        errorEmail.classList.remove("error-message");
    }

    // Validamos campo contraseña
    let passwordField = document.getElementById('password');
    let errorPassword = document.getElementById('passwordError');
    if (passwordField.value.trim() === "" || passwordField.value.length < 6) {
        errorPassword.textContent = "La contraseña es requerida y debe tener al menos 6 caracteres";
        errorPassword.classList.add("error-message");
    } else {
        errorPassword.textContent = "";
        errorPassword.classList.remove("error-message");
    }

    // Si todos los campos están OK, entonces se envía el formulario
    if (!errorName.textContent && !errorEmail.textContent && !errorPassword.textContent) {
        alert("Formulario enviado correctamente");
        document.getElementById("Formulario").reset();
        // Aquí puedes enviar el formulario al backend o base de datos
    }
});

// Expresiones Regulares
const regexIsEmpty = /^\s*$/;
const regexIsEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const regexTelefono = /^[0-9]{8,12}$/;

function validarEspacioVacio(valor) {
    return !regexIsEmpty.test(valor);
}

function validarCorreoElectronico(valor) {
    return regexIsEmail.test(valor);
}

document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registroForm");
    const nombreCompletoInput = document.getElementById("txtNombre");
    const correoElectronico = document.getElementById("txtCorreo");
    const telefonoInput = document.getElementById("txtTelefono");

    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        let formularioValido = true;
        let objErrores = {};

        if (!validarEspacioVacio(nombreCompletoInput.value) || nombreCompletoInput.value.length < 3) {
            objErrores["txtNombreDiv"] = {
                "error": "Nombre Completo no puede estar vacío y debe tener al menos 3 caracteres.",
                "input": nombreCompletoInput
            };
            formularioValido = false;
        }

        if (!validarCorreoElectronico(correoElectronico.value.trim())) {
            objErrores["txtCorreoDiv"] = {
                "error": "El correo electrónico no es válido.",
                "input": correoElectronico
            };
            formularioValido = false;
        }

        if (!regexTelefono.test(telefonoInput.value.trim())) {
            objErrores["txtTelefonoDiv"] = {
                "error": "El teléfono debe contener entre 8 y 12 dígitos.",
                "input": telefonoInput
            };
            formularioValido = false;
        }

        if (formularioValido) {
            formulario.submit();
        } else {
            Object.entries(objErrores).forEach(([key, obj]) => {
                let container = document.getElementById(key);
                container.innerHTML = "";
                let errorSpan = document.createElement("DIV");
                errorSpan.innerText = obj.error;
                container.appendChild(errorSpan);
            });
        }
    });
});

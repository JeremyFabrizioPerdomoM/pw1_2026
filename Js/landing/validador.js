let formulario= null;
let NombreCompletoInput= null;
let submitButton= null;
let correoElectronico= null;

const regexIsEmpty= /^\s*$/ ;
const regexEmail=/^[\w.-]+@[\w.-]+\.\w{2,}$/;

document.addEventListener("DOMContentLoaded", ()=>{
    formulario= document.getElementById("contactForm");
    NombreCompletoInput= document.getElementById("txtnombre");
    correoElectronico= document.getElementById("txtcorreo");
    submitButton=document.getElementById("btnEnviar");
    submitButton.addEventListener("click", (e)=> {
        e.preventDefault();
        e.stopPropagation();
        let objErrores={};
        let formularioValido=true;

        if(!ValidarEspacioVacio(NombreCompletoInput.value)){
            objErrores['txtNombreDiv']={
                "error": "Nombre Completo no puede estar vacío.",
                "input": NombreCompletoInput
            }
            formularioValido=false;
        }
        if(!ValidarCorreoElectronico(correoElectronico.value)){
            objErrores['txtCorreoDiv'] = {
                "error": "El correo electrónico no es válido.",
                "input": correoElectronico
            };
            formularioValido = false;
        }
        if(formularioValido){
            formulario.submit();
        }
        else{
            Object.entries(objErrores).forEach(err=> {
                let [key, obj] = err;
                obj.input.classList.add('error');
                let container = document.getElementById(key);
                let errorBox = container.querySelector(".error-container");
                errorBox.innerHTML = ""; // limpia solo los mensajes
                let errorSpan = document.createElement("DIV");
                errorSpan.innerText = obj.error;
                errorSpan.classList.add('error-text');
                errorBox.appendChild(errorSpan);
            });
        }
        /* if(ValidarEspacioVacio(NombreCompletoInput.value)){
            formulario.submit();
        }
        else{
            alert("Hay validaciones que fallan.");
        }*/
    });
});

function ValidarEspacioVacio(valor){
    return !regexIsEmpty.test(valor);
}
function ValidarCorreoElectronico(valor){
    return regexEmail.test(valor);
}
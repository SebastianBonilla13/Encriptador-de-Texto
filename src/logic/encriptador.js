/* 
Las "llaves" de encriptación:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

    Por ejemplo:
    "gato" => "gaitober"
    gaitober" => "gato"

- La página debe tener campos parainserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre las dos opciones.
- El resultado debe ser mostrado en la pantalla.

Extras:
- Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones. */

/* 
Limpiar texto: "X", sup. izq. gris, (rojo pasar el cursor).
Notificar Copy con pop up, inf. izq. "¡Texto copiado!"
a
*/


let varTextoUsuario;
let varStrRespuestaEncriptar = '';
let varStrRespuestaDesencriptar = '';

export function toUpper(msj) {
    /* msj = "HOLA"; */

    // texto to array
    let varTextoArray = msj.split(""); // separar en caracteres)

    console.log("to array essss: " + varTextoArray);
    return varTextoArray;
}


function obtenerTextoUsuario() {

    /* varTextoUsuario = document.getElementById('varTexto').value;
    console.log(`tipo dato input = ${typeof (varTextoUsuario)}`); */


    // validaciones
    // Debe funcionar solo con letras minúsculas. NO mayusculas, NO caracteres especiales
    if (!validarInputCopy()) {
        console.log("NO DEBERIA DEJAR");

        // Hacer funcionalidad del botón copiar

        msjAdvertencia("Solo se permiten letras minúsculas sin caracteres especiales.");
        return false;
    }
    // habilitar botón copy

    return true;

}

export function encriptar(varTextoUsuario) {
    console.log('texto str :>> ', varTextoUsuario);
    varStrRespuestaEncriptar = '';
    if (validarInputCopy()) { 
        // texto to array
        let varTextoArray = varTextoUsuario.split(""); // separar en caracteres)
        console.log('texto array :>> ', varTextoArray);

        // iterar array
        for (let index = 0; index < varTextoArray.length; index++) {
            const element = varTextoArray[index]; // obtener elemento

            // reemplazar respectivamente
            // identificar los caracteres a, e, i, o, u Realiza reemplazo / concatenación
            if (element === 'a') { // "a" to "ai"
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + "ai";
            } else if (element === 'e') { // "e" to "enter"
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + "enter";
            } else if (element === 'i') { // "i" to "imes"
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + "imes";
            } else if (element === 'o') { // "o" to "ober"
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + "ober";
            } else if (element === 'u') { // "u" to "ufat"
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + "ufat";
            } else {
                varStrRespuestaEncriptar = varStrRespuestaEncriptar + element; // sino reemplaza, agrega normal
            }
        }
        // mostrar Encriptado
        /* document.querySelector('#varTexto3').textContent = varStrRespuestaEncriptar; */


        /* let textarea = document.getElementById("TextareaRead");
        textarea.value = varStrRespuestaEncriptar; */
        return varStrRespuestaEncriptar;

    }else{
        // NO DEBERIA DEJAR
        console.log("NO DEBERIA DEJAR");

        // Hacer funcionalidad del botón copiar

        msjAdvertencia("Solo se permiten letras minúsculas sin caracteres especiales.");
        return null;
    }

}

export function desencriptar(varTextoUsuario) {
    varStrRespuestaDesencriptar = '';
    if (validarInputCopy()) {
        // texto to array
        let varTextoArray = varTextoUsuario.split("");

        // iterar array
        let index = 0;
        while (index < varTextoArray.length) {
            const element = varTextoArray[index]; // obtener elementos
            // reemplazar respectivamente
            // identificar los caracteres a, e, i, o, u Realiza reemplazo / concatenación
            if ((element === 'a') && (varTextoArray[index + 1] === 'i')) { // "a" to "ai"
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + "a";
                index = index + 1;
            } else if ((element === 'e') && (varTextoArray[index + 1] === 'n') && (varTextoArray[index + 2] === 't') && (varTextoArray[index + 3] === 'e') && (varTextoArray[index + 4] === 'r')) { // "e" to "enter"
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + "e";
                index = index + 4;
            } else if ((element === 'i') && (varTextoArray[index + 1] === 'm') && (varTextoArray[index + 2] === 'e') && (varTextoArray[index + 3] === 's')) { // "i" to "imes"
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + "i";
                index = index + 3;
            } else if ((element === 'o') && (varTextoArray[index + 1] === 'b') && (varTextoArray[index + 2] === 'e') && (varTextoArray[index + 3] === 'r')) { // "o" to "ober"
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + "o";
                index = index + 3;
            } else if ((element === 'u') && (varTextoArray[index + 1] === 'f') && (varTextoArray[index + 2] === 'a') && (varTextoArray[index + 3] === 't')) { // "u" to "ufat"
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + "u";
                index = index + 3;
            } else { // NO necesita encriptar
                varStrRespuestaDesencriptar = varStrRespuestaDesencriptar + element; // sino reemplaza, agrega normal
            }
            index++;
        }
        return varStrRespuestaDesencriptar;
        // mostrar Desencriptado
        /* document.querySelector('#varTexto3').textContent = varStrRespuestaDesencriptar; */
        /* console.log(typeof (varTextoUsuario)); */
    }else{
        return null;
    }
}

// Función para validar la entrada del usuario cuando es un texto copiado
function validarInputCopy() {
    const regexMayusculas = /[A-Z]/; // Expresión regular para mayúsculas
    const regexCaracteresEspeciales = /[^a-zA-Z0-9\s]/; // Expresión regular para caracteres especiales

    if ((regexMayusculas.test(varTextoUsuario)) || (regexCaracteresEspeciales.test(varTextoUsuario))) {
        return false;
    }

    return true; // NO contiene
}

// Función para validar la entrada del usuario en ejecución


// Asegurar que el DOM esté completamente cargado antes de agregar el event listener
/* document.addEventListener('DOMContentLoaded', function () {
    validarInputRun();
}); */

function msjAdvertencia(msj) {
    document.getElementById('msjAdvertencia').textContent = msj;
}

function copiar() {
    /* console.log("Soy copiar"); */

    const parrafo = document.getElementById('varTexto3');
    const contenidoParrafo = parrafo.textContent;
    navigator.clipboard.writeText(contenidoParrafo);

    alert("Texto copiado al portapapeles!");
    /* console.log(`Texto copiado ${contenidoParrafo}`); */
}


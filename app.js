let textOutput = '';
let textInput = ''

function asignarTextoElemento(texto, elemento) {
    let msj = document.querySelector(elemento)
    msj.innerHTML = texto;
}

function mensajeNoEncontrado() {
    asignarTextoElemento('Ningun mensaje fue encontrado', '.titulo-msj');
    asignarTextoElemento('Ingrese el texto que desees encriptar o desencriptar', '.descripcion');
    asignarTextoElemento('', '#input-texto');
}

// function mostrarMensaje() {
//     let x = document.querySelector('.empty');
//     let y = document.querySelector('.text-encrypt');
//     if (x.style.display === 'block' && textInput.length < 0) {
//         mensajeNoEncontrado();
//         x.style.display = 'block';
//         y.style.display = 'none';

//     } else {
        
//         x.style.display = 'none';
//         y.style.display = 'block';


//     }
// }

function replaceAll(str, obj) {
    // validamos el texto ingresado

    // utilizamos el cliclo for para remplazar las letras
    for (const x in obj) {
        str = str.replace(new RegExp(x, 'g'), obj[x]);

    }
    return str;

}
function validarTexto() {
    
    textInput = document.getElementById('input-texto').value;
    
    if (/^([a-z])*$/.test(textInput) && textInput.length>0) {
       document.querySelector('.empty').style.display = 'none';
       document.querySelector('.text-encrypt').style.display = 'block';
        return textInput;
    } else {
        alert('solo se aceptan letras minusculas sin acento ');
        document.querySelector('.empty').style.display = 'block';
        document.querySelector('.text-encrypt').style.display = 'none';
        return;
    }

}
/* Llaves para la encriptacion
    "e"  ==> "enter"
    "i"  ==>  "imes"
    "a"  ==>  "ai"
    "o"  ==>  "ober"
    "u"  ==> "ufat"
*/
function encrypt() {
    // capturando el texto escrito en el capmo input
    textInput = validarTexto();
    console.log(textInput)
    // aqui se declara el objeto con las llaves para encriptar
    let obj = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
    textOutput = replaceAll(textInput, obj);
   
    asignarTextoElemento(textOutput, '.salida-msj');
}
function uncrypt() {

    textInput = validarTexto();
    // aqui se declara el objeto con las llaves para desencriptar
    let obj = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' }
    textOutput = replaceAll(textInput, obj);
    // mostrarMensaje();
    asignarTextoElemento(textOutput, '.salida-msj');
}

function copy() {
    // let copyText = document.querySelector(".salida-msj").value;
    navigator.clipboard.writeText(textOutput);
    console.log(textOutput)
}

mensajeNoEncontrado();


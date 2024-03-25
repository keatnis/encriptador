let textOutput = '';
let textInput = '';
let textValido = false;
   // aqui se declara el objeto con las llaves para encriptar y desencriptar
let llaveEncriptar = { 'e': 'enter', 'i': 'imes', 'a': 'ai', 'o': 'ober', 'u': 'ufat' };
let llaveDesencriptar = { 'enter': 'e', 'imes': 'i', 'ai': 'a', 'ober': 'o', 'ufat': 'u' };

function asignarTextoElemento(texto, elemento) {
    let msj = document.querySelector(elemento)
    msj.innerHTML = texto;
}
//mensaje quye se muestra cuando no hay texto
function mensajeNoEncontrado() {
    asignarTextoElemento('Ningun mensaje fue encontrado', '.titulo-msj');
    asignarTextoElemento('Ingrese el texto que desees encriptar o desencriptar', '.descripcion');
    asignarTextoElemento('', '#input-texto');
}

function validarTexto() {
    textInput = document.getElementById('input-texto').value;
    //validamos que el texto introducido no tenga mayusculas y acentos

    if (/^([a-z\s])+$/.test(textInput) && textInput.length > 0) {
        document.querySelector('.empty').style.display = 'none';
        document.querySelector('.text-encrypt').style.display = 'block';
        textValido = true;
        return textInput;
    } else {
        alert('Solo se aceptan letras minusculas sin acento ');
        document.querySelector('.empty').style.display = 'block';
        document.querySelector('.text-encrypt').style.display = 'none';
        textValido = false;
        return;
    }

}
function replaceAll(text, accion) {
    let obj = accion == 'encriptar' ? llaveEncriptar : llaveDesencriptar;

    for (const x in obj) {
        text = text.replace(new RegExp(x, 'g'), obj[x]);
    }
    textOutput = text;
    asignarTextoElemento(textOutput, '.salida-msj');
}

function encrypt() {
    validarTexto();
    if (textValido) {
        replaceAll(textInput, 'encriptar');
        return;
    }
}

function uncrypt() {
    validarTexto();
    if (textValido) {
        replaceAll(textInput, 'desencriptar');
        return;
    }
}

function copy() {
    navigator.clipboard.writeText(textOutput);
}

mensajeNoEncontrado();


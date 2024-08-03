

function encriptar(textArea) {

    let encriptado = textArea
        .toLowerCase()
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");

    return encriptado;
}

function desencriptar(textArea){

    let desencriptado = textArea
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u");

    return desencriptado;

}



function accionEncriptar(){
    let textArea = document.getElementById(`textoUsuario`).value;


    let mensajeEncriptado = encriptar(textArea);
    document.getElementById(`textoResultado`).value = mensajeEncriptado;

}

function accionDesencriptar(){
    let textArea = document.getElementById(`textoUsuario`).value;

    let mensajeDesencriptado = desencriptar(textArea);
    document.getElementById(`textoResultado`).value = mensajeDesencriptado;
}

function accionCopiar(){
    let textoCopiar = document.getElementById(`textoResultado`);

    textoCopiar.select();
    textoCopiar.setSelectionRange(0,99999);

    try{

        let copiado = document.execCommand(`copy`);
        let msg = copiado ? `Texto copiado al portapeles` : `error al copiar`;
        alert(msg);

    }catch (err){
        console.error(`error al copiar al portapapeles`, err);
    }



}
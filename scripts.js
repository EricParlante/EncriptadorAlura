const textArea = document.querySelector(".textarea");
const mensaje = document.querySelector(".texto-mensaje");
const imagen = document.querySelector(".muneco");
const alerta = document.querySelector(".alerta");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

function botonEncriptador(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.innerHTML = textoEncriptado;
    if(textoEncriptado){
       imagen.remove();
       alerta.remove(); 
    }
}

function botonDesencriptador() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.innerHTML = textoDesencriptado;

}

function encriptar(string){
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
    string = string.toLowerCase()

    for(let i=0 ; i<matrizCodigo.length ; i++){
        if(string.includes(matrizCodigo[i][0])){
            string=string.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return string;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase()

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}






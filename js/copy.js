let copiador = document.querySelector(".boton-copiar");

function copiar(){
    navigator.clipboard.writeText(mensaje.textContent);
    alert("Copiado al portapapeles");
}

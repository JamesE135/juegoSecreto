
let numeroSecreto = 0;
intentos = 0;
let listaNumerosSorteado = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
console.log(numeroSecreto);
function verificarIntento(){

    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);
    
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento(`p`, `acertaste el numero ${intentos} ${(intentos===1) ? `vez` : `veces`} `);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    }else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento(`p`, `el numero es menor`);

        }else {
        asignarTextoElemento(`p`, `el numero es mayor`);
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja (){
 document.querySelector(`#valorUsuario`).value=``;

}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteado.length == numeroMaximo){
        asignarTextoElemento(`p`, `ya se sortearon todos los numeros`)
    }else{

    if(listaNumerosSorteado.includes(numeroGenerado)){
        return generarNumeroSecreto();

    }else {
        listaNumerosSorteado.push(numeroGenerado);
        return numeroGenerado;
    }
    }
}

function condicionesIncial(){
    asignarTextoElemento(`h1`,`juego secreto`);
    asignarTextoElemento(`p`,`indica numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}


function reiniciarJuego(){
    limpiarCaja();
    condicionesIncial();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`,`true`);


}

condicionesIncial();







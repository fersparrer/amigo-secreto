let amigos = []; 
function agregarAmigo() {
    let amigoDigitado = document.getElementById("amigo"); 
    if (amigoDigitado.value) {
        amigos.push(amigoDigitado.value); 
        console.log("Lista de amigos:", amigos);
        listadoAmigos();
        amigoDigitado.value = "";
    }
    else {
        alert("Por favor inserte un nombre");
    }
}

function listadoAmigos () {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; 

    let i = 0;
    while (i < amigos.length) {
        let li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
        i++;
    }

}

function sortearAmigo() {
    if (amigos.length === 0) {
        document.getElementById("resultado").innerHTML = "Agrega al menos un amigo antes de sortear.";
        return;
    }

    let amigoAleatorio = Math.floor(Math.random() * amigos.length);
    document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigos[amigoAleatorio]}`;
}



/*let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10; 

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto; 
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos);
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
       return;
}

function numeroRandom() {
    let numeroGenerado Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números');
    } else { 
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return numeroRandom();
        }
        else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

function condicionesIniciales() 
{
    asignarTextoElemento('h1', 'Juego del amico secreto');
    asignarTextoElemento('p', `Escribe un número del 1 al ${numeroMaximo}` );
    numeroSecreto = numeroRandom();
    intentos = 1;
    
}

function reiniciarJuego() {

    limpiarCaja();

    condicionesIniciales();

    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();*/

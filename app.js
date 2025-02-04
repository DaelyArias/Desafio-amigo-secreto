// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombre = document.getElementById('amigo').value.trim();

    if (nombre !== "") { // Evitar agregar nombres vacíos
        listaAmigos.push(nombre);
        actualizarLista();
        document.getElementById('amigo').value = ""; // Limpiar input después de agregar
    }else{
        alert('Ingrese un nombre valido');
    }
}

function actualizarLista() {
    let listaHTML = document.getElementById('listaAmigos');
    listaHTML.innerHTML = ""; // Limpiar la lista antes de actualizar

    listaAmigos.forEach(amigo => {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaHTML.appendChild(li);
    });
    return listaAmigos;
}

function sortearAmigo(){
    let resultado = document.getElementById('resultado');

    let tamanio=listaAmigos.length;

    tamanio=Math.floor(Math.random()*tamanio);

    resultado.innerHTML= listaAmigos[tamanio];


}
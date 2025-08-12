// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let Amigos = [];
//Funcion agregar amigo
function agregarAmigo(){
    //Verifica si el input esta vacio no deja enviarlo y manda msj de alerta
    if(document.getElementById('amigo').value == ''){
        alert('Favor de rellenar el campo')
    }
    //Si no procede a añadir el contenido del input al array
    else{
    Amigos.push(document.getElementById('amigo').value);
    asignarTextoElemento('li', `${Amigos}`)
    limpiarInput();
    }
}

//Añadir nombre a la lista
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Funcion de sortear un amigo
function sortearAmigo(){
    //Si el array Amigos esta vacio saldra un msj de añadir al menos un amigo
    if(Amigos.length === 0){
        alert('Introduce al menos un amigo')
    }
    //Si no hara la funcionalidad de sortear un amigo secreto por su posicion en el array
    else{
    let amigoSecreto = Math.floor(Math.random()* Amigos.length);
    console.log(Amigos[amigoSecreto]);
    asignarTextoElemento('p', `El amigo secreto es ${Amigos[amigoSecreto]}` )
    return Amigos[amigoSecreto];
    }
}

//Limpiamos el input
function limpiarInput() {
    document.getElementById('amigo').value = '';
}


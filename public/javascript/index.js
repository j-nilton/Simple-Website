"use strict";
function dizerOi() {
    let meuTitulo;
    meuTitulo = document.getElementById('titulo-principal');
    meuTitulo.innerHTML = 'Oi, José Nilton!';
    /*if(meuTitulo!.innerHTML == 'Oi, José Nilton!'){
        meuTitulo!.innerHTML = 'Você é ele mesmo?';
    }else{
        meuTitulo!.innerHTML = 'Oi, José Nilton!';
    }*/
    let meuInput;
    meuInput = document.getElementById('campo-texto');
    let entrada;
    entrada = meuInput.value;
    meuTitulo.innerHTML = entrada;
}

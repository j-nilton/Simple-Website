function dizerOi():void{
    let meuTitulo : HTMLElement | null;
    meuTitulo = document.getElementById('titulo-principal');
    meuTitulo!.innerHTML = 'Oi, José Nilton!';
    
    /*if(meuTitulo!.innerHTML == 'Oi, José Nilton!'){
        meuTitulo!.innerHTML = 'Você é ele mesmo?';
    }else{
        meuTitulo!.innerHTML = 'Oi, José Nilton!';
    }*/

    let meuInput : HTMLElement | null;
    meuInput = document.getElementById('campo-texto');

    let entrada : string;
    entrada = meuInput!.value;

    meuTitulo!.innerHTML = entrada;
}
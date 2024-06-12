let suma = document.querySelector("#sumar");
let resta = document.querySelector("#restar")
let resultado = document.querySelector("#resultado")
let reset = document.querySelector("#reset")

function sumar(){
    const numeroActual = parseInt(resultado.innerHTML);
    resultado.innerHTML = numeroActual + 1;
}

function restar(){
    const numeroActual = parseInt(resultado.innerHTML);
    if(numeroActual <= 0){
        return
    }else{
        resultado.innerHTML = numeroActual - 1;
    }
    
}

function limpiar(){
    resultado.innerHTML = 0;
}

suma.addEventListener('click', (event)=>{
    event.preventDefault();
    sumar();
})

resta.addEventListener('click', (event) =>{
    event.preventDefault();
    restar();
})

reset.addEventListener('click', (event) =>{
    event.preventDefault();
    limpiar();
})
let suma = document.querySelector("#sumar");
let resta = document.querySelector("#restar")
let resultado = document.querySelector("#resultado")
let reset = document.querySelector("#reset")

function sumar(){
    resta.removeAttribute("disabled");
    reset.removeAttribute("disabled");
    const numeroActual = parseInt(resultado.innerHTML);
    resultado.innerHTML = numeroActual + 1;
}

function restar(){
    const numeroActual = parseInt(resultado.innerHTML);
    if((numeroActual-1) < 1){
        resta.setAttribute("disabled", "true");
        reset.setAttribute("disabled", "true"); 
        resultado.innerHTML = 0; 
    }else{
        resta.removeAttribute("disabled");
        resultado.innerHTML = numeroActual - 1;
    }
    
}

function limpiar(){
    resultado.innerHTML = 0;
    reset.setAttribute("disabled", "true"); 
    resta.setAttribute("disabled", "true");
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
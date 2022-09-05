/* Pagina de Bienvenida */

// Parrafo de Bienvenida
let nmbVisitante = prompt("Bienvenidx ingresa tu nombre por favor, Gracias");
let spanNmb = document.querySelector("#nmb-visitante");
spanNmb.textContent = nmbVisitante

// Boton De Cambio Estilo
let btnCambio = document.querySelector("#cambio");
let miBtn = document.querySelector("a");

btnCambio.addEventListener("click", function(){
    if (miBtn.className === 'btn-z-inicio'){
        miBtn.classList.remove("btn-z-inicio");
        miBtn.classList.add("btn-z-cambio");
        document.querySelector("body").style.background = "#1a0321"
        document.querySelector("p").style.color = "white"
        document.querySelector("#copyright").style.color = "white"
        let listaSpan = document.querySelectorAll("a span");
        for(let i = 0; i < listaSpan.length; i++){
            listaSpan[i].setAttribute("id", `${listaSpan[i].id}-${[i]}`)
        }
        btnCambio.textContent = "Dark"
    } else if(miBtn.className === 'btn-z-cambio'){
        miBtn.classList.remove("btn-z-cambio");
        miBtn.classList.add("btn-z-inicio");
        document.querySelector("body").style.background = "#1c1b21"
        document.querySelector("p").style.color = "#7a7a7a"
        document.querySelector("#copyright").style.color = "#7a7a7a"
        let listaSpan = document.querySelectorAll("a span");
        for(let i = 0; i < listaSpan.length; i++){
            listaSpan[i].setAttribute("id", `span-${[i]}`)
        }
        btnCambio.textContent = "Neón"
    }
    
})
// Boton De Cambio Fondo
let btnCambioFondo = document.querySelector("#cambio-imagen");
let fondoDeTexto = document.querySelector(".titulo");

btnCambioFondo.addEventListener("click", function(){

    if(fondoDeTexto.className === 'titulo'){
        fondoDeTexto.classList.remove("titulo");
        fondoDeTexto.classList.add("titulo-z");
        // fondoDeTexto.style.backgroundImage = "url(fondoDeTexto1.jpg)" 
    } else if (fondoDeTexto.className === 'titulo-z'){
        fondoDeTexto.classList.remove("titulo-z");
        fondoDeTexto.classList.add("titulo");

    }
})





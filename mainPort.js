/* Pagina Principal */

/* Reloj*/
let mostrarFecha = document.querySelector("#fecha");
let mostrarReloj = document.querySelector("#reloj");

let fecha = new Date();

let semana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miercoles",
  "Jueves",
  "Viernes",
  "Sabado",
];

let meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

mostrarFecha.innerHTML = `${semana[fecha.getDay()]}, ${fecha.getDate()} de ${
  meses[fecha.getMonth()]
} de ${fecha.getFullYear()}`;

setInterval(() => {
  let hora = new Date();
  mostrarReloj.textContent = hora.toLocaleTimeString();
}, 1000);

/*CAMBIO COLORES*/ 

let miTitulo = document.querySelector("#mititulo");
let btnE = document.querySelector("#btnE");
let btnF = document.querySelector("#btnF");
let miFoto = document.querySelector("#picz");

miTitulo.addEventListener("click", () => {
  if (miTitulo.id === "mititulo") {
    miTitulo.setAttribute("id", "mitituloz");
    document.querySelector("body").style.background = "#1a0321";
    document.querySelector(".minav").style.background = "#a945c7";
    // document.querySelector(".minav").style.background = "#ae2997"
    document.querySelector(".card-body").style.background = "#1a0321";
    document.querySelector(".container-z").style.background = "#a945c7";
    btnE.classList.remove("btnz");
    btnE.classList.add("btnzz");
    btnF.classList.remove("btnz");
    btnF.classList.add("btnzz");
    miFoto.setAttribute("src", "MiFotoA.jpg");
    let listaCard = document.querySelectorAll("section .card-body-z");
            for(let i = 0; i < listaCard.length; i++){
              listaCard[i].style.background = "#1a0321"
            }
} else if (miTitulo.id === "mitituloz") {
    miTitulo.setAttribute("id", "mititulo");
    document.querySelector("body").style.background = "#1c1b21";
    document.querySelector(".minav").style.background = "#2b2a32";
    document.querySelector(".card-body").style.background = "#1c1b21";
    document.querySelector(".container-z").style.background = "#2b2a32";
    btnE.classList.remove("btnzz");
    btnE.classList.add("btnz");
    btnF.classList.remove("btnzz");
    btnF.classList.add("btnz");
    miFoto.setAttribute("src", "MiFotoB.jpg");
    let listaCard = document.querySelectorAll("section .card-body-z");
            for(let i = 0; i < listaCard.length; i++){
              listaCard[i].style.background = "#1c1b21"
            }
}
});



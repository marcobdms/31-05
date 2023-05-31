const botonModoNoche = document.getElementById("modoNoche");
const botonModoDia = document.getElementById("modoDia");

botonModoNoche.addEventListener("click", activarModoNoche);
botonModoDia.addEventListener("click", activarModoDia);

function activarModoNoche() {
    document.body.classList.add("dark-theme");
}

function activarModoDia() {
    document.body.classList.remove("dark-theme");
}
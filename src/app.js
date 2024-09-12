/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = obtenerCarta;

let botonNew = document.getElementById("botonNewCard");
botonNew.addEventListener("click", obtenerCarta);

let botonTimer = document.getElementById("botonTimer");
botonTimer.addEventListener("click", () => {
  setInterval(obtenerCarta, 5000);
});

function obtenerCarta() {
  let elemCard = document.getElementById("card");
  let numeroCarta = Math.floor(Math.random() * 13) + 1;
  switch (numeroCarta) {
    case 1:
      numeroCarta = "A";
      break;
    case 11:
      numeroCarta = "J";
      break;
    case 12:
      numeroCarta = "Q";
      break;
    case 13:
      numeroCarta = "K";
      break;
  }
  elemCard.innerHTML = numeroCarta;

  let palos = ["♦", "♥", "♠", "♣"];
  let indexPalos = Math.floor(Math.random() * 4);

  let elemsPalo = document.querySelectorAll(".palo");
  elemsPalo.forEach(valor => {
    valor.innerHTML = palos[indexPalos];
    if (indexPalos < 2) {
      valor.style.color = "red";
      elemCard.style.color = "red";
    } else {
      valor.style.color = "black";
      elemCard.style.color = "black";
    }
  });
}

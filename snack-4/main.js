"use strict";

// Crea un array di oggetti che rappresentano delle persone.

const persone = [
  // Ogni persona ha un nome, un cognome e un’età.
  {
    nome: "Tizio",
    cognome: "Caio",
    eta: 20,
  },
  {
    nome: "Pippo",
    cognome: "pluto",
    eta: 15,
  },
];
// Crea quindi un nuovo array
let canDrive = [];

//inserendo, per ogni persona, una frase con il nome e cognome e l’indicazione se può guidare, in base all’età.

for (let i = 0; i < persone.length; i++) {
  canDrive[i] = persone[i];
  if (canDrive[i].eta >= 18) {
    canDrive[i].testo = `hai ${canDrive[i].eta} anni e puoi guidare`;
  } else {
    canDrive[i].testo = `hai ${canDrive[i].eta} anni e NON puoi guidare`;
  }
  delete canDrive[i].eta;
}
console.log(canDrive);

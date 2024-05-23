"use strict";

// Crea un array di oggetti che rappresentano degli animali.
const animali = [
  // Ogni animale ha un nome, una famiglia e una classe.
  {
    nome: "leone",
    famiglia: "felidi",
    classe: "mammiferi",
  },
  {
    nome: "cane",
    famiglia: "canidi",
    classe: "mammiferi",
  },
  {
    nome: "gallina",
    famiglia: "fasianidi",
    classe: "uccelli",
  },
];
// Crea un nuovo array
let mammiferi = animali.filter((animale) => animale.classe === "mammiferi");
//con la lista dei mammiferi.
/*
for (let i = 0; i < animali.length; i++) {
  if (animali[i].classe === "mammiferi") {
    mammiferi[i] = animali[i];
  }
}
*/
console.log(mammiferi);

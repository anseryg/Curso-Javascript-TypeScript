// Escreva uma função que recebe 2 números e retorne o maior deles.

function getMaior (x, y) {
  if (x > y) {
    return console.log(x);
  } else {
    return console.log(y)
  }
}

getMaior(15, 14);


// Exercicio refatorado, com arrow function e operação ternária
const max2 = (x, y) => x > y ? x : y;

console.log(max2(300, 35))
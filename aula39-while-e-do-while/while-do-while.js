// For serve para quando sabemos mais ou menos quantas vezes aqui irá repetir.
// Ja o While é quando não temos noção de quantas vezes irá ser necessário repetir aquilo.

// let i = 0;

// while (i <= 10) {  // Irá executar enquanto a condição for verdadeira
//   console.log(i);
//   i++;  // Impede de se tornar um laço infinito
// }


function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r)
}


const min = 1
const max = 50
let rand = random(min, max)

while (rand !== 10) {  // Verifica se a condição é true e então executa os código até dar false
  rand = random(min, max); // Pra atualizar o número e não ficar infinito
  console.log(rand);
}


console.log('-----------');


do {  // do While primeiro executa os códigos e só depois ele verifica a condição
  rand = random(min, max); // Pra atualizar o número e não ficar infinito
  console.log(rand);
} while (rand !== 10)
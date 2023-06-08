// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');

// for
// Passar 3 coisas
// Criar uma variável, criar uma condição que vai parar  o laço, e incrementar ou decrementar a variável. i - index.
// 1. Criar uma variável de controle;
// 2. Condição, para dizer quando esse for parar;
// 3. Incrementa para atingir a condição
for (let i = 0; i <= 10; i += 2) {  // Da pra brincar com os sinais
  console.log(`${i}`);
}

/* Da pra brincar com os sinais. Exemplos:
Começar do -100 -> let i = -100
Pular de 10 em 10 -> i += 10
1 em 1 -> i++
*/


for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? 'par' : 'ímpar';  // Checa se o número é par ou impar com operação ternária
  console.log(i, par);
}


// Índices        0       1       2
const frutas = ['Maçã', 'Pêra', 'Uva', 'Menlancia', 'Laranja', 'Morango', 'Banana'];  // 3 Elementos

for (let i = 0; i < frutas.length; i++) {  // Não para até mostrar todos os elementos ou indices de um array
  console.log(`Índice ${i} - ${frutas[i]}`);
}
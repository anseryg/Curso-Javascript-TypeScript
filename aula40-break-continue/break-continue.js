const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Continue -> Continua para a próxima iteração.
// Break -> Sai do laço.


for (let numero of numeros) {

  if (numero === 2) {
    console.log('Pulei o número 2');
    continue;  // Quando a condição der 2, ele pula pra proxima iteração do laço
  }

  console.log(numero);

  if (numero === 7) {
    console.log('7 encontrado, saindo...');
    break;  // Para o laço quando encontra o 7 e não executa mais
  }
}

let i = 0;
while (i < numeros.length) {
  let numero = numeros[i];

  if (numero === 2) {
    console.log('Pulei o número 2');
    i++
    continue;  // Quando a condição der 2, ele pula pra proxima iteração do laço
  }

  console.log(numero);

  if (numero === 7) {
    console.log('7 encontrado, saindo...');
    i++
    break;  // Para o laço quando encontra o 7 e não executa mais
  }

  i++
}
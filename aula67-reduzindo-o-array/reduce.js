// Some todos os números (Reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor) {
  // acumulador += valor; -> soma todos os números
  // if (valor % 2 === 0); acumulador.push(valor) -> Retorna um array com todos os pares
  acumulador.push(valor * 2);  // Retorna um array com o dobro dos valores
  return acumulador;
}, []);  // }, [] -> Valor do acumulador, caso não passado, ele irá ser o primeiro valor do array. Nesse caso aqui, o acumulador é um array vázio
console.log(total);




// Retorne a pessoa mais velha
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 10 },
  { nome: 'Rosana', idade: 64 },
  { nome: 'Wallace', idade: 63 }
];
const maisVelha = pessoas.reduce(function(acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;  // caso a idade do objeto do acumulador seja maior, ele retorna o do acumulador
  return valor  // caso contrario, ele retorna o objeto do valor
})  // O acumulador se torna o primeiro objeto, então comparando ele com o valor (ja que o acumulador é o primeiro, o valor se torna o segundo e vai mudando a cada retorno do laço) da pra saber qual é o maior
console.log(maisVelha);
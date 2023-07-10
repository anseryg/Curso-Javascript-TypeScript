// Quase o mesmo jeito que o filter, porém retorna diferente.
// array.map(function(valor, indice, array) {});
// O método .map() cria um novo array com base nos valores do array original. Ele aplica uma função a cada elemento do array original e utiliza os valores retornados por essa função para preencher o novo array. Dessa forma, o método map não altera o array original, apenas gera um novo array com os resultados desejados.


// Dobre os números
//               0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map(valor => valor * 2);  // => Arrow Function
console.log(numerosEmDobro);




// Para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 }
];

const nomes = pessoas.map(obj => obj.nome);  // => Arrow Function
console.log(nomes);

const idades = pessoas.map(obj => ({ idade: obj.idade }));  // As chaves do objetos iam começar a fazer o papel das chaves da função, então colocando os parênteses ele se torna uma expressão
console.log(idades);

const comIds = pessoas.map(function(obj, indice) {
  const newObj = { ...obj } // Tomar cuidado ao trabalhar com valores que passam por referência. Por isso aqui foi copiado o array original.
  newObj.id = indice;
  return newObj;
})
console.log(comIds);

console.log(pessoas);

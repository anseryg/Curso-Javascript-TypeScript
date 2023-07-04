// Filter, map, reduce -> Funções mais importantes para Array dentro do JS
// Filter -> Ela filtra o array, porém não modifica ele
// Filter -> Vai sempre retornar um array, com a mesma quantidade de elemento ou menos
// Filter -> Tem 3 argumentos/parâmetros: (valor, índice, array), Não é necessário usar todos


// Retorne os números maiores que 10
//                0  1   2   3  4  5  6  7  8  9   10  11  12
const numeros = [ 5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27 ];

// Tudo o que retornar true é o que vai ser colocado no novo array, o que retornar false é o que não vai entrar no novo array
const numerosFiltrados = numeros.filter((valor) => {
  return valor > 10;
});

// Versão do código em apenas uma linha:
// const numerosFiltrados = numeros.filter(valor => valor > 10);

// console.log(numerosFiltrados);

const analiseNumerosFiltrados = numeros.filter((valor, indice, array) => {
  // console.log(valor, indice, array);
  return valor > 10
})
// console.log(analiseNumerosFiltrados);




// Retorne as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoa com mais de 50 anos
// Retorne as pessoas cujo nome termina com A
const pessoas = [
  { nome: 'Luiz', idade: 62 },
  { nome: 'Maria', idade: 23 },
  { nome: 'Eduardo', idade: 55 },
  { nome: 'Leticia', idade: 19 },
  { nome: 'Rosana', idade: 32 },
  { nome: 'Wallace', idade: 47 },
];

// const pessoasComNomeGrande = pessoas.filter(function (obj) {
//   return obj.nome.length >= 5
// });
const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoasComMaisDeCinquentaAnos = pessoas.filter(obj => obj.idade > 50);
console.log(pessoasComMaisDeCinquentaAnos);

const pessoasCujoNomeTerminaComA = pessoas.filter(function (obj) {
  return obj.nome.toLowerCase().endsWith('a')  // Transforma o texto em lowerCase e usa o "endswidth()" para verificar qual letra a string termina
})
console.log(pessoasCujoNomeTerminaComA);
/*
Regras de constantes:
Não podemos criar constantes com palavras reservadas
Constante precisam ter nomes significativos, tanto para melhor visibilidade de código, quanto para trabalhos em equipe
Não pode começar o nome de uma constante com um número
Não podem conter espaços ou traços (-)
Utilizamos camelCase para variáveis com nome mais detalhes
Case-sensitive, por exemplo: const nomeCliente é diferente de const nomeclient, são duas variáveis diferentes
Não pode ser criada sem ser inicializada (sem ter um valor atribuido a ela)
Não pode alterar o valor de uma constante, ou seja, ela tem que ser criada e atribuida com um valor
NÃO utilize VAR, Utilize CONST.
*/

const nome = 'Gabriel';
// console.log(nome);

// Operadores básicos: + - * /
const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
let resultadoTriplicado = resultado * 3
resultadoTriplicado = resultadoTriplicado + 5
// console.log(resultado);
// console.log(resultadoTriplicado);

const testeUm = '5'
const testeDois = 10
// console.log(testeUm + testeDois) // 510: '5' + 10


console.log(typeof(primeiroNumero))
console.log(typeof(nome))


// typeof() serve para verificar qual o tipo da váriavel

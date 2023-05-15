// string, number, undefined, null, boolean, symbol
const nome = 'Gabriel'; // string
const nome1 = "Gabriel"; // string
const nome2 = `Gabriel`; // string

const numero = 10; // number
const numero2 = 10.52; // number

let nomeAluno; // undefined -> não aponta para local nenhum na memória
let sobrenomeAluno = null; // nulo -> não aponta para local nenhum na memória

const boolean = true; // boolean (true or false) (lógico)
const aprovado = false; // Exemplo de boolean

console.log(typeof(nome));
console.log(typeof(numero));
console.log(typeof(nomeAluno));
console.log(typeof(sobrenomeAluno));
console.log(typeof(boolean));


let a = 2;
const b = a; // o valor de a foi copiado para b, diferente de um tipo de dados por referencia (que aponta para o mesmo local na memória)

/*
Um exemplo de quando usar o null e a diferença com o undefined é:
imagina que você tenha um site onde o usuário possa selecionar a cor de fundo do perfil dele
e se ele não selecionar nenhuma cor, você vai configurar a variável desse jeito, com null
e se ele selecionar a cor, mudará para a red por exemplo, e se ele remover, voltará para null
*/
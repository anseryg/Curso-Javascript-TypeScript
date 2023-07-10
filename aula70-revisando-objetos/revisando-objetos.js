const pessoa = {  // Um objeto literal
  nome: 'Gabriel',
  sobrenome: 'Santos'
};
console.log(pessoa.nome);  // Notação de ponto
console.log(pessoa['nome']);  // Notação de colchete
console.log(pessoa.sobrenome);  // Notação de ponto
console.log(pessoa['sobrenome']);  // Notação de colchete


const chave = 'nome';
console.log(pessoa[chave]);  // Notação de colchete pode ser util quando não saber ou quiser receber algo de algum lugar, o que não é possivel com a notação de ponto


console.log('====================');


const pessoa1 = new Object();  // Criação de objeto através do construtor
pessoa1.nome = 'Gabriel';
pessoa1.sobrenome = 'Santos';

const pessoa2 = {  // Criação de objeto literal
  nome: 'Gabriel',
  sobrenome: 'Santos',
}

console.log(pessoa1, pessoa2);


console.log('====================');



// Um array sem outros arrays dentro também pode ser chamado de Vetor






// For in -> Le os índices ou chaves do objeto
//                0       1       3
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Santos',
  idade: 17
};


for (let chaves in pessoa) {
  console.log(chaves, pessoa[chaves]);
}


// const frutas = ['Pêra', 'Maçã', 'Uva'];

// for (let index in frutas) {
//   console.log(frutas[index]);
// }

// const frutas = ['Pêra', 'Maçã', 'Uva'];
// for (let i = 0; i < frutas.length; i++) {
//   console.log(frutas[i]);
// }
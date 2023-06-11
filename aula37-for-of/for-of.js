// For Clássico - Geralmente com iteráveis (array ou strings).
// For in - Retorna o índice ou chave (string, array ou objetos).
// For of - Retorna o valor em si (iteráveis, arrays ou strings).


const nomes = ['Gabriel', 'Santos', 'Dreynus']

// for clássico
for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

console.log('----------');

// for in
for (let i in nomes) {
  console.log(nomes[i]);
}

console.log('----------');

// for of
// quando usamos o of não vem o índice, vem o valor em si
for (let valor of nomes) {
  console.log(valor);
}

console.log('----------');

// forEach
nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});

console.log('----------');

// Com for in, coisa desse tipo com objeto é possivel, com for of não
const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Santos'
};

for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}
// return
//Retorna o valor
// Termina a função
function soma (a, b) {
  return a + b;  // Aqui a função retorna um valor
}

function soma2 (a, b) {
  console.log(a + b);  // Aqui ela apenas mostra o valor que lhe foi dada e o que lhe foi pedido para fazer, não retorna.
}
soma2(5, 2)



function criaPessoa (nome, sobrenome) {
  // return { nome: nome, sobrenome: sobrenome }
  return { nome, sobrenome }  // Como elas possuem o mesmo nome, o javascript ja supõe e ligam elas
}
const pessoa1 = criaPessoa('Gabriel', 'Santos')
const pessoa2 = {
  nome: 'Dreynus',
  sobrenome: 'D.'
}
console.log(typeof pessoa1);
console.log(pessoa1);
console.log(typeof pessoa2);
console.log(pessoa2);



function falaFrase (comeco) {
  function falaResto (resto) {
    return comeco + ' ' + resto;
  }
  return falaResto;
}

const fala = falaFrase('Olá,');  // "fala" recebe a função falaFrase()
const resto = fala('Mundo!');  // "resto" recebe a função "fala" e passa argumento pro parâmetro da função interna da falaFrase()
console.log(resto);



// function duplica (n) {
//   return n * 2;
// }

// function triplica (n) {
//   return n * 3;
// }

// function quadriplica (n) {
//   return n * 4;
// }

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador
  };
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));
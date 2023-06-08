const verdadeira = true;

// Let tem escobo de bloco {... bloco}
// Var só tem escopo de função

let nome = 'Gabriel';  // Criando
var nome2 = 'Gabriel';  // Criando

var nome2 = 'Santos';  // Redeclarada
console.log(nome, nome2);

if (verdadeira) {
  let nome = 'Santos';  // Criando (Apesar de ter o mesmo nome, não é a mesma variável)
  var nome2 = 'Rogério'; // Redeclarando

  if (verdadeira) {
    var nome2 = 'Ronaldo'; // Redeclarando
    let nome = 'Outra coisa';
    console.log(nome, nome2);  // Primeiro ele busca a variável no bloco em que está
    // Caso não encontre, procurará em outro escopo
  }
}

console.log(nome, nome2);

var sobrenome = 'Santos';

function falaOi() {
  var nomeVar = 'Gabriel'
  console.log(sobrenome)
}

falaOi()



// Desconsidera isso, eu só tava testando
// function falaOi (messageText) {
//   const messageTextFormat = String(messageText).toLowerCase()
//   if (messageTextFormat === 'oi') {
//     const message = 'Olá!'
//     console.log(message);
//   }
// }

// falaOi('OI')
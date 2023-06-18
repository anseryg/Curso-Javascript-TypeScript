// Declaração de função (function hoisting)
// hoisting: a engine do JavaScript vai elevar as declarações de funções desse tipo, e também variáveis declaradas com a palavra var
// Funções são First-class objects (Objetos de primeira classe)

falaOi(); // Hoisting, a função foi elevada pro topo do arquivo então não há problema em chamar antes de declarar a função
// Declaração normal
function falaOi() {
  // Essa função vai ser elevada pro topo
  console.log("Olá");
}

// Function Expression
const souUmDado = function () {
  // Uma constante recebe uma função como um dado
  console.log("Sou um dado.");
};
souUmDado(); // Executa a constante como uma função. Ela recebeu uma função então passou a ser uma função.

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo:");
  funcao();
}
executaFuncao(souUmDado);  // Como a souUmDado é uma função apartir de uma variável, posso utiliza-la de parâmetro/dado, mas não posso executa-la ali dentro

// Arrow Function
const arrowFunction = () => {
  console.log("Sou uma Arrow Function");
};
arrowFunction();

// Dentro de um objeto
const objeto = {
  falar: function () {
    console.log('Estou falando...');
  }
}
objeto.falar();  // Posso usar notação de ponto para executar uma função dentro do objeto
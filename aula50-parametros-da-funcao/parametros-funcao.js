// A função definida com a palavra function tem
// Argumentos que sustenta todos os argumentos enviados


function funcaoUm (a, b, c) {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }

  console.log(total, a , b, c);
}
funcaoUm(1, 2, 3, 4, 5, 6, 7);




function funcaoDois(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcaoDois(1, 2, 3);  // d, e & f se torna undefined por não ter passado os argumentos para esses parâmetros



function funcaoTres(a, b = 2) {  // Caso não envie um valor para b, ele assumirá como valor de 2
  console.log(a + b);
}
funcaoTres(1);

function funcaoQuatro (a, b = 2, c = 4) {
  console.log(a + b + c);
}
funcaoQuatro(2, undefined, 20)  // Pula o b, fazendo assim ele assumir o valor padrão dele (b = 2)


// Desestruturação de objeto nos parâmetro
function funcaoCinco ({ nome, sobrenome, idade }) {  
  console.log(nome, sobrenome, idade);
}
funcaoCinco({ nome: 'Gabriel', sobrenome: 'Santos', idade: 17 });

// Desestruturação de array nos parâmetros
function funcaoSeis ([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcaoSeis(['Gabriel D.', 'Santos', 17]);



const conta = function(operador, acumulador, ...numeros) {  // O resto dos argumentos vai para o parâmetro "numeros", com o rest operator (...)
  // console.log(operador, acumulador, numeros);
  for (let numero of numeros) {
    if (operador  === '+') acumulador += numero;
    if (operador  === '-') acumulador -= numero;
    if (operador  === '/') acumulador /= numero;
    if (operador  === '*') acumulador *= numero;
  }
  console.log(acumulador);
  console.log(arguments);
};
conta('+', 1, 20, 30, 40, 50);
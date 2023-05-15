/*
Atribuições/Funções de Numbers:
.toString() -> Converte o Number para String
         (2) -> Mostra em sua versão Binária
.toFixed() -> Define quantas casas decimais ficará
Number.isInteger() -> Verifica se o número é inteiro
Number.isNaN() -> Verifica se é um NaN
*/

// IEEE 754-2008
let num1 = 1500;
let num2 = 2.5;


// Transformar Number para String
console.log(num1.toString() + num2);

// Ver a representação binária
console.log(num1.toString(2));

let num3 = 10.54623632867
// Define quantas casas decimais ficará
console.log(num3.toFixed(2));  // Foi definido para mostrar apenas 2 casas decimais depois do ponto

let num4 = 10
console.log(Number.isInteger(num4));  // Verifica se o número é inteiro

let temp = num4 * 'Ola'
console.log(Number.isNaN(temp));  // Verifica se o resultado é NaN

let num5 = 0.7 // Number
let num6 = 0.1 // Number

num5 += num6; // era para ser 0.8
num5 += num6; // era para ser 0.9
num5 += num6; // era para ser 1.0

console.log(num5); // vira 0.9

num5 = num5.toFixed(2);  // Pega as 2 casas decimais, toFixed transforma em string

console.log(num5); // Arredondou o 0.9999999... para 1.0. Porém continua sendo 0.999...
// Se verificar com o Number.isInteger(), irá retotnar false


num5 = Number(num5)  // Transformando de volta em Number devido ao toFixed
num5 = parseFloat(num5.toFixed(2));

console.log(num5);
console.log(Number.isInteger(num5));
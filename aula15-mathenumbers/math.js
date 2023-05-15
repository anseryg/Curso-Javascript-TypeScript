// A linguagem fornece uma "biblioteca" de matemática repleta de coisas matemáticas. (Math.)

let num1 = 9.54578
let num2 = Math.floor(num1);  // Vai arredondar o número para baixo, ou seja, 9
let num3 = Math.ceil(num1);  // Arredondará para cima, no caso, 10
let num4 = Math.round(num1);  // Vai arrendondar para o mais próximo

console.log(num2);  // 9
console.log(num3);  // 10
console.log(num4);  // 10, pois o decimal passou de 5

console.log(Math.max(1,2,3,4,5,-10,-50,1500,9,8,7,6));  // Pega o maior número da sequência
console.log(Math.min(1,2,3,4,5,-10,-50,1500,9,8,7,6));  // Pega o menor número da sequência

let aleatorio = Math.random(); // Gera um número aleatório entre 0 e 1
console.log(aleatorio);

aleatorio = Math.random() * (10 - 5) + 5;  // Gera um número aleatório entre 5 e 10
console.log(aleatorio);

aleatorio = Math.round(Math.random() * (10 - 5) + 5);  // Gera um número aleatório entre 5 e 10 arrendondado
console.log(aleatorio);

console.log(Math.PI);  // Retorna valor de PI

let raizExemplo = 16
console.log(raizExemplo ** 0.5);  // Retorna a raiz quadrada de um número (Não é da Math, é apenas matematica mesmo)

console.log(100 / 0);  // JavaScript divide por 0 - Inifinity
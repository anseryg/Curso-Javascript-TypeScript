const numero = 10;

// Se (numero >= 0 && numero <= 5) ocorrer, faça isso: {código}
// Se não, faça isso: {código}

if (numero >= 0 && numero <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (numero >= 6 && numero <= 8) {
    console.log('O número está entre 6 e 8');
} else if (1 === 1) {  // Atrapalhou, pois ele parará e executará aqui, pois aqui é uma condição verdadeira e sairá e não vai dar o que eu queria
    console.log('LITERAL');
} else if (numero > 9 && numero <= 11) {  // Verdadeiro
    console.log('O número está entre 9 e 11');
} else {
    console.log('O número NÃO está entre 0 e 11')
}

console.log('...Aqui vai o resto do código');

// A partir do momento que o JavaScript encontra a primeira condição verdadeira, ele executará ela e sairá
// Mesmo que haja mais 1000 condições verdadeiras posteriormente, ele executará a primeira verdadeira que encontrar e sairá

// Se preciso checar uma coisa independente, eu crio outro if
// Não misture objetivos, não coloque várias condições diferentes em um if apenas
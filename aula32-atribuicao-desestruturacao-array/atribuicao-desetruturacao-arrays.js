// ... rest, ... spread

// Indices       0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];  // Array
const [um, dois, tres,] = numeros

console.log(um, dois, tres);

// Pulando números/valores
const [pUm, , pTres, , pCinco, , pSete] = numeros;
console.log(pUm, pTres, pCinco, pSete);



// índice               0          1          2
// índice            0  1  2    0  1  2    0  1  2
const numerosT2 = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];

// Pega o número 6 de um Array dentro de outro Array, sendo assim possivel ter mais de um array dentro de outro
console.log(numerosT2[1][2]);

const [lista1, lista2, lista3] = numerosT2;
console.log(lista3[2]);
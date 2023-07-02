//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']

// nomes.splice(índice, delete, elemento1, elemento2, elemento3)
// 1° argumento: Qual índice devo começar?
// 2° argumento: Quantos elementos eu quero remover?
// 3° argumento: Elementos para adicionar, todos separados por virgula

const removidos = nomes.splice(4, 1)  // Remove "Senka" e salva na variável
console.log(nomes, removidos, '-> Exemplo 1');




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes2 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const removidos2 = nomes2.splice(3, 2);  // A partir do índice 2, remove 2 elementos
console.log(nomes2, removidos2, '-> Exemplo 2');




//                -5         -4      -3        -2        -1
const nomes3 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const removidos3 = nomes3.splice(-2, 2)  // Remove 2 elementos usando o negativo, que começa do a partir do final
console.log(nomes3, removidos3, '-> Exemplo 3');




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes4 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const removidos4 = nomes4.splice(-2, Number.MAX_VALUE);  // Remove a partir do -2 e vai até o máximo de elementos que tiver, serve para evitar ter que passar um número absurdo pra remover o resto do array
console.log(nomes4, removidos4, '-> Exemplo 4');
console.log(Number.MAX_VALUE, '-> Número máximo do JavaScript');  // O número máximo que JavaScript roda




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes5 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const adicionar5 = nomes5.splice(3, 0, 'Lívia')  // No índice 3, não remova nenhum, adicione 'Lívia'
//const trocar = nomes5.splice(3, 1, 'Lívia')  // Removeria a 'Anna' que ocupa o índice 3, e adicionaria 'Lívia no lugar
console.log(nomes5, adicionar5, '-> Exemplo 5');  // Adiciona Lívia no índice 3




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes6 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const removidos6 = nomes6.splice(-1, 1)  // Simula o .pop(), que remove o último elemento do array, já que o -1 é sempre o último elemento do Array
console.log(nomes6, removidos6, '-> Exemplo 6');




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes7 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
const removidos7 = nomes7.splice(0, 1)  // Simula o .shift(), que remove o primeiro elemento de um array
console.log(nomes7, removidos7, '-> Exemplo 7');




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes8 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
nomes8.splice(nomes8.length, 0, 'D.')  // Simula o .push(), que adiciona elemento no final do array
// Ele adiciona apos o número de um índice, então ele verifica o tamanho do array (array.length), pra poder adicionar no final
console.log(nomes8, '-> Exemplo 8');




//                -5         -4      -3        -2        -1
//                 0          1       2         3         4
const nomes9 = ['Gabriel', 'Santos', 'Anna', 'Dreynus', 'Senka']
nomes9.splice(0, 0, 'D.')  // Simula o .unshift(), que adiciona elemento no começo de um Array
console.log(nomes9, '-> Exemplo 9');
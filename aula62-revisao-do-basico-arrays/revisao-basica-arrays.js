//                0           1         2
const nomes = ['Gabriel', 'Kaddem', 'Dreynus'];
nomes[2] = 'Fiuty';  // Substitui o index 2 por 'Fiuty'
console.log(nomes);
delete nomes[2];  // Remove o elemento 2 sem que os índices sejam alterados, o índice 2 fica vázio, deixando os outros índices na mesma posição
console.log(nomes);

console.log('===========================');

//                 0          1         2
const nomes2 = ['Gabriel', 'Kaddem', 'Dreynus'];
const novo = nomes2;  // Valor por referência, alterando um deles, afeta todos os dois
novo.pop();  // Alterou o nomes2 e o novo por apontarem no mesmo local na memória
console.log(nomes2);

console.log('---------------------------');

const nomes3 = ['Gabriel', 'Kaddem', 'Dreynus'];
const novo2 = [...nomes];  // Assim copia todos os valores do array "nomes3" para "novo2", fazendo assim ele ficar idependente de "nomes3"

novo2.pop();  // Agora alterando o "novo2", não altera o "nomes3"
console.log(nomes3);
console.log(novo2);


console.log('===========================');


const nomes4 = ['Gabriel', 'Kaddem', 'Dreynus'];
console.log(nomes.length);  // É um atributo, então não precisa dos parênteses. Não confundir o tamanho do Array com o número de índices. Indices começam pelo 0, tamanho começa pelo 1

// nomes4.pop();  // Assim remove o ultimo elemento
const removido = nomes4.pop()  // Aqui ela vai remover o ultimo elemento do Array e retornar o valor removido pra váriavel
console.log(nomes4, removido);


console.log('---------------------------');


const nomes5 = ['Gabriel', 'Kaddem', 'Dreynus'];
const removido2 = nomes5.shift();  // Remove o primeiro elemento e retorna ele na váriavel
console.log(nomes5, removido2);


console.log('===========================');


const nomes6 = ['Gabriel', 'Kaddem', 'Dreynus'];
nomes6.push('Santos');  // Adiciona um elemento ao final do Array
console.log(nomes6);

nomes6.unshift('Fiuty')  // Adiciona um elemento no começo do Array
console.log(nomes6);


console.log('===========================');


//                 0           1         2         3
const nomes7 = ['Gabriel', 'Kaddem', 'Dreynus', 'Santos'];
const novo3 = nomes7.slice(1, 3);  // Exibe de um elemento ao outro, indice 1 até o 2. (está 3 por que é um a mais pra ficar 2)
console.log(novo3);

const novo4 = nomes7.slice(0, -1)  // Todos menos o último
console.log(novo4);


console.log('===========================');


// Converter String em um Array
const nome = 'Gabriel D. Santos'
const nomes8 = nome.split(' ');  // Separou a string por espaço deixando cada palavra em um indice de array
console.log(nomes8);  // [ 'Gabriel', 'D.', 'Santos' ]


// Converter o Array em uma String
const nomes9 = [ 'Gabriel', 'D.', 'Santos' ]
const nome2 = nomes9.join(' ')  // O que vai separar os elementos? O espaço, assim juntando os elementos e colocando um espaço entre eles
console.log(nome2);
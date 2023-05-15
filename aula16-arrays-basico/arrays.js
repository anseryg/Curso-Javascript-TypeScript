// Arrays são uma espécie de lista
// Para criar um array utiliza-se os colchetes
// Você pode colocar qualquer tipo de dado dentro, mas não é uma boa prática utilizar varios tipos de dado em apenas um Array


// Lembra-se que Strings são indexadas, possuem inidices de cada caractere:
//            0123456
const nome = 'Gabriel'
console.log(nome[3])  // Consulta o indice 3, no caso, a letra r


// Arrays são indexados por elemento:
//                0        1        2
const alunos = ['Luiz', 'Maria', 'João'];  // Array com Strings
console.log(alunos);
console.log(alunos.length);  // Verifica quantos elementos o array possui
console.log(alunos[0]);  // Consulta/pega o indice 0, no caso, "Luiz"
console.log(alunos[2]);



// Editar os Array
alunos[0] = 'Eduardo'  // Altera o elemento 0 (Luiz) e atribui um novo valor a ele (Eduardo)
console.log(alunos);  // Então "Eduardo" entrou no lugar de "Luiz"



// Criar um novo elemento no Array
alunos[3] = 'Luiza'  // Como não há um elemento 3, ele criará um novo 
console.log(alunos);  // [ 'Eduardo', 'Maria', 'João', 'Luiza' ]

// Seria meio complicado, pois teria que saber qual o tamanho do array e quantos indices ele tem
// Então tem uma função que adiciona um novo elemento ao fim do array
//                    0        1        2
const alunosDois = ['Luiz', 'Maria', 'João'] //  Possui 3 elementos
console.log(alunosDois.length);  // Verifica quantos elementos o array possui

alunosDois.push('Gabriel')  // Adiciona um novo elemento ao final do array
console.log(alunosDois);
console.log(alunosDois.length);  // Verifica quantos elementos o array possui

// Para adicionar um novo elemento no começo do array
alunosDois.unshift('Otávio')  // Adiciona um novo elemento no começo do array, então ele se torna o indice 0 e todos os outros sao movidos para frente
console.log(alunosDois);



// Remover elementos do final do Array
const alunosTres = ['Luiz', 'Maria', 'João'];
alunosTres.pop()  // Removeu o ultimo elemento, no caso, "João"

console.log(alunosTres);

// Remover elementos do começo do Array
const alunosQuatro = ['Luiz', 'Maria', 'João'];
alunosQuatro.shift()  // Removido o primeiro elemento (indice 0), no caso, "Luiz" e "Maria" passa a ser o indice 0

console.log(alunosQuatro);

// Remover o elemento sem alterar os indices
const alunosCinco = ['Luiz', 'Maria', 'João'];
delete alunosCinco[1];  // Deleta o elemento 1 ("Maria"), porém não altera os indices

console.log(alunosCinco);



// Fatiar os arrays (Pega de um elemento até outro)
const alunosSeis = ['Luiz', 'Maria', 'João']
alunosSeis.push('Luiza')
alunosSeis.push('Eduardo')
console.log(alunosSeis);

console.log(alunosSeis.slice(0, 3));  // Pegou do elemento 0 até o 3, "Luiz" - "João" ((0, 3), 1 a mais porque ele não é incluido)
console.log(alunosSeis.slice(0, -2)); // Pega todos elementos menos os 2 ultimos



console.log(typeof(alunosSeis));  // Mostra que o Array é um tipo object
console.log(alunosSeis instanceof(Array));  // Pergunto se alunosSeis é uma instancia de um Array (se ele é um Array)
// Se retorna true é porque é um Array, false não é um Array
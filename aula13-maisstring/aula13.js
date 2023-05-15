// MDN e w3schools é um bom lugar para ler a documentação, já que não é possivel saber/lembrar de tudo


let umaString = "Um \"texto\"";  // Você pode escapar um caractere com as barra invertida, caso você abra com aspas duplas por exemplo e precisa colocar um texto em aspas duplas.

let outraString = 'Um \\texto'; //  para colocar uma barra invertida literal, você precisa colocar duas barras


console.log(umaString);
console.log(outraString);




//                01234567
let maisString = 'Um texto';
console.log(maisString[4]);  // Você pode pegar um elemento do indice que você pedir com colchetes, que no caso do texto será o "e"


console.log(maisString.charAt(6));  // O charAt pega o elemento que você deseja
console.log(maisString.charCodeAt(6));  // Ele pega o valor da tabela ASC, no exemplo, o código do T na tabela ASC

// Posso fazer uma pesquisa, exemplo:
console.log(maisString.indexOf('texto'))  // Estou perguntando em qual "casa" começa a palavra "texto"

// Substituição
console.log(maisString.replace('Um', 'Outro'));  // Substitui o 'um' por 'Outro'

maisString = 'O rato roeu a roupa do rei de roma'
console.log(maisString.replace(/r/g, '#'));  // Substitui todos os R do texto por #


//            0123456789
maisString = 'O rato roe'
console.log(maisString.length);  // Retorna o exato tamanho de caracteres que possui
// Deu 10 pois o lenght conta exatamente quantos há, enquanto o index começa pegando pelo elemento zero

maisString = 'O rato roeu a roupa do rei de roma.'
console.log(maisString.slice(2, 6));  // Corta o texto do jeito que deseja, (incio, fim)


console.log(maisString.split(' '))  // Dividir os espaços e retornar sem o espaço
console.log(maisString.toUpperCase()); // Deixa todos caracteres em maiúsculo
console.log(maisString.toLowerCase()); // Deixa todos caracteres em minúsculo





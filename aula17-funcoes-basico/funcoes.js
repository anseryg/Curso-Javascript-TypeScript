// ARGUMENTO É O VALOR QUE É PASSADO PARA O PARAMETRO
/*
function teste(parâmetro) {

}

teste(argumento)
*/


function saudacao() {  // Cria uma função chamada "saudacao"
    console.log('Boa noite!');  // Comandos que será executado quando a função for chamada
}

saudacao();  // Chamou a função - chamar a função faz ela ser executada



function saudacaoComNome(nome) {  // Cria um parâmetro para a função (funciona como uma variável)
    console.log(`Boa noite, ${nome}`);  // Pega o parâmetro que foi enviado e utiliza
    return 123456;  // Digo o que eu quero que a função retorne, Não é o ideal fazer isso
}

saudacaoComNome('Gabriel')  // Passa os argumentos para o parâmetros da função
// O valor recebido aqui irá para o parâmetro "nome" que será tipo uma variável

const variavel = saudacaoComNome('Dreynus');  // Salva a função com argumentos dentro de uma variável e executa a função
console.log(variavel); // Retorna um valor da função se ela tiver (return) // Não é ideial

// O ideal seria
function SaudacaoComNomeIdeal(nome) {
    return `Bom dia ${nome}`
}
const variavelIdeal = SaudacaoComNomeIdeal('Drey')
console.log(variavelIdeal);



// Uma função pode ou não retornar valores.



function soma(x, y) {
    const resultado = x + y
    return resultado  // Não posso chamar essa variável fora da função, pois ela existe apenas dentro da função
}
console.log(soma(5, 10));
console.log(soma(2, 2));
console.log(soma(10, 8));


// ******A partir do momento que o interpretador encontrar a palavra "return" dentro da função, não executará nada mais depois do "return"********


function somaDois(x = 1, y = 1) {  // Sempre que eu não passar um paramêtro, o x vai assumir como 1 e o y também como 1 (ou qualquer coisa que você especificar)
    const resultado = x + y;
    return resultado;
}

console.log(somaDois()); // Não passei nenhum parâmetro, então ele assumiu (1, 1) pois foi o padrão que foi definido




const raiz = function (n) {  // Uma função anonima
    return n ** 0.5
};
console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));


const raizDois = (n) => n ** 0.5;  // Função arrow, um jeito de criar uma função de um jeito mais simples
console.log(raizDois(64));
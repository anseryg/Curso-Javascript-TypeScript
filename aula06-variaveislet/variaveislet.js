/*
Regras de variáveis:
    Não podemos criar variáveis com palavras reservadas
    Variáveis precisam ter nomes significativos, tanto para melhor visibilidade de código, quanto para trabalhos em equipe
    Não pode começar o nome de uma variável com um número
    Não podem conter espaços ou traços (-)
    Utilizamos camelCase para variáveis com nome mais detalhes
    Case-sensitive, por exemplo: let nomeCliente é diferente de let nomeclient, são duas variáveis diferentes
    NÃO utilize VAR, Utilize LET.
*/

let nome_dele = 'Gabriel'; // String
let nome_dela = 'Anna';

console.log(nome_dele, 'nasceu em 2006.');
console.log(nome_dela, 'nasceu em 2009.');
console.log('Em 2022', nome_dele, 'Conheceu', nome_dela, '.');
console.log(nome_dele, 'e', nome_dela, 'completaram 1 ano juntos.');
console.log('Desde então', nome_dele, 'e', nome_dela, 'continuam juntos.');



let nome; // Apenas declarou a variável
// Essa variável foi declarada, porém ela não possui um valor nesse momento (undefined).

nome = 'Anna'; // Inicializando a variável, modificou o valor da variável.
console.log(nome);
nome = 'Gabriel'
console.log(nome)


/*
let não é possivel ser redeclarada, ou seja, você pode mudar o valor dela como no exemplo 2,
    porém não sendo possivel recria-la.
Para alterar o valor não coloque o let na frente, o let simboliza criar/declarar a variável
*/
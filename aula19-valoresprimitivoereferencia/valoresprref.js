/*
Tipo de Dados Primitivos (imutáveis) -> string, number, boolean, undefine, null (bigint, symbol) <- Valores copiados

Dado por Referência (mutável) -> array, object, function <- Valores passados por refêrencia
*/


//          1234567
let nome = 'Gabriel';  // Continua sendo "Gabriel" porque é imutavel
nome[0] = 'W';  // A string é imutavel, então continuará exibindo o G
console.log(nome[0], nome);


let a = 'A';
let b = a;  // Está realizando uma cópia, copiando o valor de "a" para "b"
// "b" ao longo do código vai manter o seu valor que pegou independente do valor que "a" receber posteriormente
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);  // "b" permanece com o valor de "a" pois foi ja copiado e o valor dele não depende de "a"




let aDois = [1, 2, 3];
let bDois = aDois;  // Por ser um dado por refêrencia, ele aponta para o mesmo lugar. "bDois" se linkou a "aDois"
let bDoisCopiar = [...aDois];  // Agora foi copiado/puxado e agora o valor de "bDoisCopiar" é independente de "aDois"
//ou seja, se "aDois" mudar, "bDoisCopiar" não vai mudar

let cDois = bDois;

console.log(aDois, bDois);  // Se eu alterar o valor de uma das duas, as duas serão afetadas por estarem linkadas

aDois.push(4);
console.log(aDois, bDois);  // "bDois" também foi afetado pela linha acima

bDois.pop();
console.log(aDois, bDois);  // "aDois" foi afetado pelo "bDois" também

aDois.push('Gabriel')
console.log(cDois);


bDoisCopiar.pop();
console.log(aDois, bDoisCopiar);  // Como "bDoisCopiar" é independente (porque foi copiado)
// a mudança feito nele NÃO afeta o valor de quem ele copiou e vice versa



const aPessoa = {
    nome: 'Gabriel',
    sobrenome: 'Santos'
};
const bPessoa = aPessoa;
const bPessoaCopiar = {...aPessoa}  // Cópia
console.log(bPessoa);

aPessoa.nome = 'Luiz'
console.log(bPessoa);  // Mesma lógica, alterou "aPessoa" ou "bPessoa", afeta os dois por ser dado de referência
console.log(bPessoaCopiar);  // Independente pois foi copiado
/*
Operadores Lógicos:
    && -> AND -> E  // Todas as expressões precisam ser verdadeiras para retornar true
    || -> OR -> OU  // Precisa que apenas uma das expressões sejam verdadeiras  // Alt + 124 //
    !  -> NOT -> NÃO  // Nega o valor, se é true, ele vira false e vice-versa


*/

// Expressão and:
const expressaoAnd = true && true;
console.log(`true && true:  ${expressaoAnd}`);  // Retorna true
// Todas a expressão precisa ser verdadeira para retornar true

const expressaoAndDois = true && true && false && true;
console.log(`true && true && false && true:  ${expressaoAndDois}`);  // Retorna false
// Todas a expressão precisa ser verdadeira para retornar true

// Exemplo and:
const usuario = 'Gabriel';
const senha = '123456';

//                      true                    true
const vaiLogar = usuario === 'Gabriel' && senha === '123456';
// usuário é igual a 'gabriel'? true
// senha é igual a '123456'? true
// se os dois forem verdadeiros a expressão completa retornará true e o "usuário irá logar"
console.log(`O usuário é igual a 'Gabriel' e a senha é igual a '123456'?:  ${vaiLogar}\n`);



// Expressão or:
const expressaoOr = true || false;
console.log(`true || false:  ${expressaoOr}`);  // Retorna true
// Basta uma ser verdadeira para a expressão completa ser true

const expressaoOrDois = false || false;
console.log(`false || false:  ${expressaoOrDois}`);  // Retorna false
// A expressão completa é false, não há nenhuma true

const expressaoOrTres = false || false || false || true
console.log(`false || false || false || true:  ${expressaoOrTres}\n`);  // Retorna true
// Basta uma ser verdadeira para a expressão completa ser true



// Expressão not:
console.log(!true);  // false
// Ele nega o valor passado, o true vira false
console.log(!false);  // true
// Nega o false, virando true
console.log(!!true);  // true
// Negou 2 vezes, virou false e depois virou true
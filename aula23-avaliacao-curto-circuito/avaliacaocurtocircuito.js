/*
&& -> false && true -> false "o valor mesmo"
|| -> true || false -> vai retornar o "o valor verdadeiro"

FALSY:
    *false - false literal
    0 -> valor em false
    '' "" `` -> valor em false
    null / undefined -> valor em false
    NaN - valor em false
Qualquer coisa diferente dos FALSY (dos escritos acima), será contado como true no JavaScript.
*/

// and:

console.log('Gabriel Santos' && true && 'Dreynus');  // Vai checar a todas até retornar o valor da última que for verdadeira
// Como todos são verdadeiros ele retornou 'Dreynus', pois não há mais nada pra checar e retorna o último valor checado

console.log('Luiz' && undefined && 'Dreynus');  // undefined
// parou no undefined vázia pois é onde a checagem parou, pois undefined é false, então retorna como último valor checado

// Exemplo:
function falaOi () {
    return 'Oi';
}

let vaiExecutar = 'Dreynus';  // Não é uma string vazia então é verdadeira, então irá prosseguir e iniciar a função
console.log(vaiExecutar && falaOi());  // se vaiExecutar for true ele vai carregar a função na tela "Oi"



// or:

console.log(0 || false || null || 'Gabriel Santos' || true);
// precisa que apenas uma expressão seja verdadeira para retornar true
// então a checagem acaba no primeiro valor verdadeiro encontrado e retorna o ele
// 'Gabriel Santos' não é uma string vazia então é true, pois não é um FALSY

// Exemplo:
let corUsuario = null;
let corPadrao = corUsuario || 'preto';

console.log(corPadrao);  // preto
// curUsuario é false pois não foi declarado nenhum valor verdadeiro então será 'preto' que é um valor verdadeiro

corUsuario = 'red'
corPadrao = corUsuario || 'preto';
console.log(corPadrao);  // red
// vermelho foi avalizado como verdadeiro então a checagem acaba ai e retorna ela

const a = 0
const b = null;
const c = 'false';
const d = false;
const e = NaN;
// Qual valor irá retornar?
console.log(a || b || c || d || e);
// 'false', pois é um valor verdadeiro porque é uma string não vazia
// se todas fossem falsas o valor da última false será retornado
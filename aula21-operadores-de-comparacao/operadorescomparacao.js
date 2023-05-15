/*
Operadores de Comparação:
    > -> Maior que
    >= -> Maior que ou igual a
    < -> Menor que
    <= -> Menor que ou igual a
    == -> Igualdade (Só checa valor)  ********* Não recomendável utilizar
    === -> Igualdade Estrita (Checa valor e tipo)
    != -> Diferente (Só checa valor)  ********* Não recomendável utilizar
    !== -> Diferente Estrito (Checa valor e tipo)
*/

const comp = 10 > 5;  // 10 é maior do que 5? 
console.log(`10 é maior que 5?: ${comp}`);
// Essas expressões sempre vão retornar um valor booleano


const compDois = 10>= 5;  // 10 é maior ou igual a 5?
// Não precisa que os dois (> ou =) retorne true, se qualquer um dos dois der true, será true
console.log(`10 é igual ou maior que 5?: ${compDois}`);


const compTres = 10 < 11;  // 10 é menor que 11?
console.log(`10 é menor que 11?: ${compTres}`);


const compQuatro = 10 <= 11;  // 10 é menor ou igual a 11?
console.log(`10 é menor ou igual a 11?: ${compQuatro}`);


// O motivo pela qual não devemos utilizar ==:
const numUm = 10;  // number
const numDois = '10';  // string
const compCinco = numUm == numDois;  // Checa apenas o valor, num1(10) é igual a num2('10')?
console.log(`${numUm} é igual a '${numDois}'?: ${compCinco}`);  // Retornará true mesmo 10 sendo uma string
// Retornará true porque o == verifica apenas o valor e não o tipo


// Por isso utilizar === (Igualdade Estrito):
const numTres = 10;  // number
const numQuatro = '10';  // string
const compSeis = numTres === numQuatro;  // Checa o valor e o tipo, numTres(10) é igual a numQuatro('10')?
console.log(`${numTres} é igual a '${numQuatro}'?: ${compSeis}`);  // false
// São diferentes porque um é string e um number, mesmo os dois sendo o mesmo número


// O motivo pela qual não devemos utilizar !=:
const numCinco = 11;  // number
const numSeis = '11';  // string
compSete = numCinco != numSeis;  // Chega apenas o valor, numCinco(11) é diferente de numSeis('11')?
console.log(`${numCinco} é diferente de '${numSeis}'?: ${compSete}`);  // false
// Retorna false por que != verifica apenas o valor e não o tipo, um é string e outro number, era para retornar true pois são diferentes


// Por isso utilizar !== (Diferente Estrito):
const numSete = 10;  // number
const numOito = '10';  // string 
const compOito = numSete !== numOito;  // Checa o valor e o tipo, numSete('10') é diferente de numSeis('10')?
console.log(`${numSete} é diferente de ${numOito}?: ${compOito}`); // true
// retorna true pois realmente são diferentes, "numSete" é number e "numOito" é string
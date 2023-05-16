/*
Entre 0h - 11h - Bom dia
Entre 12h e 17 - Boa tarde
Entre 18 e 23 - Boa noite
*/

// if pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes
// Posso ter vários else ifs na checagem
// Só posso ter um else na checagem
// Podemos usar condições sem else if, utilizando apenas if e else


const hora = 50;

// Se a hora for maior ou igual a zero e a hora for menor ou igual a 11
//      true         true
if (hora >= 0 && hora <= 11) {  // se a condição for avaliada como verdadeira, executará o bloco de código
    console.log('Bom Dia!');
} else if (hora >= 12 && hora <= 17) {  // Se não (else), verifica Se (if) hora é maior ou igual a 12 e hora é menor ou igual a 17
    console.log('Boa Tarde!');
} else if (hora >= 18 && hora <= 23) {  // Se não (else), verifica Se (if) hora é maior ou igual a 18 e hora é menor ou igual a 23
    console.log('Boa Noite!');
} else {  // Se não(else) encaixar em nenhuma condição, executará esse bloco de código
    console.log('ERRO: Horário invalido!');
}


const tenhoGrana = true;

if (tenhoGrana) {  // tenhoGrana é verdadeiro então cai nessa estrutura
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}
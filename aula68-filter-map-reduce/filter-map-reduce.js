// Retorne a soma do dobro de todos os pares
// -> Filtrar pares
// -> Dobrar os valores
// -> Reduzir (somar tudo)
const numeros = [5, 50, 80 ,1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// Forma mais linha
// const numerosPares = numeros.filter(function(valor) {
//   return valor % 2 == 0 * 2;
// }).map(function(valor) {
//   return valor * 2;
// }).reduce(function(acumulador, valor) {
//   return acumulador + valor
// })

// Forma menos linha
const numerosPares = numeros
  .filter(valor => valor % 2 == 0 * 2)
  .map(valor => valor * 2)
  .reduce((acumulador, valor) => acumulador + valor)

// [ 50, 80, 2, 8, 22 ] -> Pares (Filter)
// [ 100, 160, 4, 16, 44 ] -> Dobro (Map)
// 324 -> Total (Reduce)

console.log(numerosPares);
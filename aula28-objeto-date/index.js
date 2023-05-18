// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000;
// const umDia = 60 * 60 * 24 * 1000;

// const data = new Date(0 + tresHoras + umDia);  // 01/01/1970 Timestamp unix ou época unix

// console.log(data.toString());

// const data = new Date(2023, 3, 20, 15, 14, 60);  // a, m, d, h, M, s, ms
/*
Janeiro: 0
Fevereiro: 1
Março: 2
Abril: 3
Maio: 4
Junho: 5
Julho: 6
Agosto: 7
Setembro: 8
Outubro: 9
Novembro: 10
Dezembro: 11
*/
// console.log(data.toString());

const dataDois = new Date('2023-03-24 03:07:55')  // Formato mais utilizado para pegar data
console.log('Dia:', dataDois.getDate());  // Pega o dia
console.log('Mês:', dataDois.getMonth() + 1);  // Pega o dia
console.log('Ano:', dataDois.getFullYear());  // Pega o dia
console.log('Hora:', dataDois.getHours());  // Pega o dia
console.log('Minuto:', dataDois.getMinutes());  // Pega o dia
console.log('Segundo:', dataDois.getSeconds());  // Pega o dia
console.log('Milesimo:', dataDois.getMilliseconds());  // Pega o dia
console.log('Dia Semana:', dataDois.getDay());  // Pega o dia -> 0 - Domingo, 6 - Sábado
console.log(dataDois.toString());

console.log(Date.now());  // Do marco zero até hoje em milésimos de segundos -> 1684380648213
const DataAtualPeloMarco = new Date(1684380648213)
console.log(DataAtualPeloMarco.toString());


function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const sec = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${sec}`;
}

const dataFuncao = new Date();
const dataBrasil = formataData(dataFuncao)
console.log(dataBrasil);
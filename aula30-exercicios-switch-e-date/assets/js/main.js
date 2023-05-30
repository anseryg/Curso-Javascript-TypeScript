function getDataDiaTexto(dataDia) {  // Função para definir qual dia da semana que é
  const dias = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sábado'];

  return dias[dataDia]
}

function getMesTexto (dataMes) {  // Função para definir qual mês é
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril',
  'Maio', 'Junho', 'Julho', 'Agosto',
  'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return meses[dataMes];
}

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`
}


const data = new Date();  // Pega a data e hora atual
const dataDia = getDataDiaTexto(data.getDay());  // Pega o dia da semana com a função que pega o dia da semana
const dataDiaMes = data.getDate();
const dataMes = getMesTexto(data.getMonth());  // Pega o mês com a função que pega o mes
const dataAno = data.getFullYear();  // Pega o ano
const hora = zeroAEsquerda(data.getHours());
const min = zeroAEsquerda(data.getMinutes());
const sec = zeroAEsquerda(data.getSeconds());

const mainText = document.querySelector('.data')
mainText.innerHTML = `<h1>${dataDia}, ${dataDiaMes} de ${dataMes} de ${dataAno} - ${hora}:${min}:${sec}</h1>`
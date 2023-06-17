function mostraHora() {
  let data = new Date()

  return data.toLocaleTimeString('pt-BR', {
    hour12: false
  });
}

// function funcaoDoInterval() {
//   console.log(mostraHora());
// }

//      O que vai executar,    de quanto em quanto tempo (em milisegundos)
// setInterval(funcaoDoInterval, 5000);

const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000)


setTimeout(function() {  // essa função parou a função da timer
  clearInterval(timer)
}, 3000);

setTimeout(function() {
  console.log('Olá, Mundo!');
}, 5000)
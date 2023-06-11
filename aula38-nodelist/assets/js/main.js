const paragrafos = document.querySelector('.paragrafos')
const ps = paragrafos.querySelectorAll('p');

const estilosBody = getComputedStyle(document.body)  // Pega todos os estilos de um elemento, nesse caso, do body
const backgroundColorBody = estilosBody.backgroundColor  // Pegou a cor de fundo
console.log(backgroundColorBody);

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = '#fff'
}
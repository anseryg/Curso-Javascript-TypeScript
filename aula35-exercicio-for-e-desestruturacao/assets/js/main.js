const elementos = [
  {tag: 'p', texto: 'Qualquer Texto que você quiser.'},
  {tag: 'div', texto: 'Frase 2'},
  {tag: 'section', texto: 'Frase 3'},
  {tag: 'footer', texto: 'Frase 4'}
]

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let {tag, texto} = elementos[i]  // Desestruturou o objeto, "agora viraram variáveis"
  let criarTag = document.createElement(tag);
  let criarTexto = document.createTextNode(texto);

  criarTag.appendChild(criarTexto)
  div.appendChild(criarTag)
}

container.appendChild(div)
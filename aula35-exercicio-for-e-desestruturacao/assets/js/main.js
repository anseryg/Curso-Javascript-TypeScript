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
  let criarTag = document.createElement(tag);  // O elemento criado só vai passar a ser child de algum elemento quando definirmos
  let criarTexto = document.createTextNode(texto);  // Cria um nó de texto

  criarTag.appendChild(criarTexto)
  div.appendChild(criarTag)
}

container.appendChild(div)
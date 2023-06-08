const elementos = [
  {tag: 'p', texto: 'Frase 1'},  // Índice 0
  {tag: 'div', texto: 'Frase 2'},  // Índice 1
  {tag: 'footer', texto: 'Frase 3'},  // Índice 2
  {tag: 'section', texto: 'Frase 4'},  // Índice 3
];

const container = document.querySelector('.container');
const newDiv = document.createElement('div')

const newContainer = container.appendChild(newDiv)

for (let i = 0; i < elementos.length; i++) {
  const {tag, texto} = elementos
  newContainer.appendChild([i], tag, texto)
}


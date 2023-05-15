const number = Number(prompt('Digite um número:'));

const numeroTitulo = document.querySelector('#numero-titulo');
const texto = document.querySelector('#texto');

numeroTitulo.innerHTML = number;


// texto.innerHTML = 
//     `
//     <p>Raiz quadrada: ${number ** 0.5} <br/> 

//     ${number} é inteiro: ${Number.isInteger(number)} </br> 

//     É NaN: ${Number.isNaN(number)} <br/> 

//     Arredondado para baixo: ${Math.floor(number)} <br/> 

//     Arredondado para cima: ${Math.ceil(number)} <br/> 

//     Com duas casas decimais: ${number.toFixed(2)}</p>
//     `;

texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${number ** 0.5}</p>`;
texto.innerHTML += `<p>${number} é inteiro: ${Number.isInteger(number)}</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(number)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo: ${Math.floor(number)}</p>`;
texto.innerHTML += `<p>Arredondado para cima: ${Math.ceil(number)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${number.toFixed(2)}</p>`;
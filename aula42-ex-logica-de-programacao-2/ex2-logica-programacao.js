// Escreva uma função chamada ePaisagem que recebe dois argumentos:
// Largura e altura de uma imagem (number).
// Retorne true se a imagem estiver no modo paisagem

// Refatorado com Arrow Function e tirou o ? e :, pois a condição em si
// Já retorna true ou false.
const ePaisagem = (width, height) => width > height

console.log(ePaisagem(1080, 1920));
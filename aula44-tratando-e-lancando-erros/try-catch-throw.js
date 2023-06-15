// try {  // Código que tenha a chance de dar erro
//   console.log(naoExisto);
// } catch (err) {  // Caso de erro, cairá nesse bloco
//   console.log('naoExisto não existe.');
//   console.log(err);  // Mostra o erro completo que está guardado no err
// }


function soma(x, y) {
  if (typeof x !== 'number' || typeof y !== 'number') {  // Se x e y for diferente de number
    throw new ReferenceError('x e y precisam ser números.');  // Lançar o erro
  }

  return x + y;
}
try {  // Se ocorrer algum erro no bloco try, executará o catch, caso nao, executará o try mesmo.
  console.log(soma(10, 5));
  console.log(soma('10', 5));
} catch (error) {  // Capturou o erro
  // console.log(error);
  console.log('Alguma coisa mais amigável para o usuário');
}
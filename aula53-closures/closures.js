// Escopo 0: Global
function retornaFuncao () {
  // Escopo 1
  const nome = 'Luiz';
  return function () {  // função anonima
    // Escopo 2
    return nome;
  }
}

const funcao = retornaFuncao();  // "funcao" recebe uma função anonima (retornafuncao())
console.log(funcao);

// Essa função anonima tem acesso a 3 escopos, a dela, a do pai dela e a do global.
// Closure é habilidade de acessar seu escopo léxico
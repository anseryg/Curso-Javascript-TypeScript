// IIFE -> Immediately invoked function expression
(function (idade, peso, altura) {  // Função invocada imediatamente

  const sobrenome = 'Santos';

  function criaNome (nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome () {
    console.log(criaNome('Gabriel'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(17, 70, 1.84);  // Basicamente uma função anônima para fugir do escopo global, ela é declarada e executada imediatamente.
const nome = 'Gabriel'

function falaNome() {
  console.log(nome);  // Caso não encontre nome no escopo que ela está, ela irá procurar no escopo pai, caso nao ache, ela procurará no pai do pai e assim por diante, isso é escopo léxico
}
falaNome()

function usaFalaNome () {
  const nome = 'Santos';
  falaNome();  // Nada que estiver nesse escopo vai mexer no escopo dessa função que está aqui, ela continuará lembrando do seu escopo e de seus vizinhos
}
usaFalaNome();
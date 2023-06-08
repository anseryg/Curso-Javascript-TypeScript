const pessoa = {
  nome: 'Gabriel',
  sobrenome: 'Santos',
  idade: 17,
  endereco: {
    cidade: 'Buritama',
    estado: 'São Paulo'
  }
};

// Atribuição normal
// const nome = pessoa.nome


// Atribuição via desestruturação
// Puxa a variável "nome" através de seu nome
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// A variável "nome" ja não existe mais, pega a chave "nome" e cria a variavel "teste"
const {nome: n, sobrenomeDois} = pessoa;
console.log(n);


let {
  endereco: {cidade: c = 12345, estado},  // Extraiu a cidade e estado. Diz que a "cidade" vai para a variável "c". Caso ela não existe, será o valor padrão que foi definido (12345)
  endereco  // Extraiu o endereco completo
} = pessoa; 
console.log(c, estado, endereco);
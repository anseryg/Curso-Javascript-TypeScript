// Função Construtora -> Objetos
// Funcão Fabrica -> objetos

// Fabrica começa com minuscula e se usa camelCase
// Construtora começa com Maiuscula

// Construtora -> Pessoa (new)

// Criar uma função construtora:
function Pessoa(nome, sobrenome) {  // Serve como se fosse um molde

  // Atributos ou métodos privados
  const ID = 123456;  // Cria algo interno, não estando disponiveis fora, como por exemplo: p1.ID, não existe.

  const metodoInterno = () => {
    console.log('Sou um método interno e não sendo possivel ser chamado através da notação de ponto');
  }

  // Atributos ou métodos publicos

  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(`${this.nome}: Sou um método`);
  };
}

// Sempre que usar uma função construtora é necessário chamar o "new"
const p1 = new Pessoa('Gabriel', 'Santos');  // Basicamente um molde
const p2 = new Pessoa('Dreynus', 'D.');  // Para criar vários

// O new cria um novo objeto vazio (p1, p2) e faz o this apontar pro objeto que está sendo usado (p1, p2)

p1.metodo();
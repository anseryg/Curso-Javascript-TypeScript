// Factory Function (Função Fábrica)
// Constructor Function (Função Construtora)
function criaPessoa (nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`  // Só obtem o valor
    },

    // Setter
    set nomeCompleto (valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala (assunto = 'falando sobre nada.') {
      return `${this.nome} está ${assunto}`  // O this vai ser sempre quem chamar o objeto.
    },

    altura: altura,
    peso: peso,

    // Getter
    get imc() {  // Só obter o valor
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

// const p1 = criaPessoa('Gabriel', 'Santos', 1.84, 70);
// console.log(p1.imc())
// const p2 = criaPessoa('Dreynus', 'D.', 1.78, 68);
// console.log(p2.fala('falando sobre JS'));  // O this vai ser sempre quem chamar o objeto.

const p1 = criaPessoa('Gabriel', 'Santos', 1.8, 80);
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.imc);

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

p1.nomeCompleto = 'Dreynus D. Santos'
console.log(p1.nome);
console.log(p1.sobrenome);
console.log(p1.nomeCompleto);  // É uma função e finge não ser por conta do getter
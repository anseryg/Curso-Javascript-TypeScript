const array = [1,2,3];
array.push(4);
array[0] = 'Gabriel';
// Não tem problema nenhum eu mexer assim com const, pois estou alterando os elementos do Array, e não reatribuindo valor a ele
console.log(array);



// Suponha-se que precise criar um determinado número de pessoas
const nome01 = 'Gabriel';
const sobrenome01 = 'Santos';
const idade01 = '17';

const nome02 = 'Dreynus';
const sobrenome02 = 'Wayker';
const idade02 = '19';
// Essas variáveis estão relacionadas entre si, pois se tratam de uma pessoa e suas informações sobre ela

// Pode-se criar um objeto na qual vai possuir todos os dados necessários de forma mais facil:
const pessoa01 = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade: 17
};

console.log(pessoa01.nome);  // Assim você pode consultar a informação que deseja - Acessando os valores que estão dentro da pessoa1
console.log(pessoa01.sobrenome);
console.log(pessoa01.idade);

// Porém ainda não melhorou muito, por que ainda é necessário criar objetos para cada pessoa

// É possivel criar uma função que cria objetos assim para você
function criaPessoa (nome, sobrenome, idade) {  // Gera objetos com pessoas diferentes de acordo com os argumentos passados
    return {
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = criaPessoa('Gabriel', 'Santos', 17)
const pessoa2 = criaPessoa('Joao', 'Silva', 32)
const pessoa3 = criaPessoa('Maria', 'Oliveira', 55)
const pessoa4 = criaPessoa('Pedro', 'Moreira', 44)
console.log(pessoa1.nome);
console.log(pessoa2.nome);
console.log(pessoa3.nome);
console.log(pessoa4.nome);



const pessoaFala = {
    nome: 'Gabriel',
    sobrenome: 'Santos',
    idade: 17,

    fala() {  // Função
        console.log(`${this.nome} ${this.sobrenome} está falando oi...`);  // this representa o objeto (pessoaFala)
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {  // Cada vez que eu chamar esse metódo essa idade vai ser incrementada
        this.idade++;
    }
};
pessoaFala.fala();  // 17
pessoaFala.incrementaIdade();  // 17 + 1
pessoaFala.fala()  // 18
pessoaFala.incrementaIdade();  // 18 + 1
pessoaFala.fala();  // 19
pessoaFala.incrementaIdade();  // 19 + 1
pessoaFala.fala();  // 20



// Arrays -> Colchetes []
// Objetos -> Chaves {}
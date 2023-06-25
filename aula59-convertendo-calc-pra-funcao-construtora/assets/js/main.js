function Calculadora() {
  this.display = document.querySelector('.display');


  this.inicia = () => {
    this.capturaCliques();
    this.capturaEnter();
  }

  this.capturaEnter = () => {
    document.addEventListener('keyup', e => {  // Quando soltar a tecla
      if(e.key === 'Enter') this.realizaConta();  // Se a tecla for Enter
    });
  }

  this.capturaCliques = () => {
    document.addEventListener('click', event => {
      const el = event.target;  // Elemento que está sendo pressionado

      if (el.classList.contains('btn-num')) this.addNumDisplay(el);  // Se o elemento clicado possui a classe 'btn-num'
      if (el.classList.contains('btn-clear')) this.clear();  // Está chamando o método aqui nessa função capturaCliques
      if (el.classList.contains('btn-del')) this.del();
      if (el.classList.contains('btn-eq')) this.realizaConta();
    });
  };

  this.addNumDisplay = el => {
    this.display.value += el.innerText;  // .value pra pegar o valor do input
    this.display.focus();  // O foco estava ficando no botão, então quando apertava enter, o navegador entendia que estava apertando o botão, redirecionando o foco para o display não terá mais esse problema.
  }

  this.clear = () => this.display.value = '';  // Limpando o display da calculadora
  // this.clear = () => {    // Mesma coisa, apenas sem encurtar o código
  //   this.display.value = '';  // Limpando o display da calculadora
  // };

  this.del = () => this.display.value = this.display.value.slice(0, -1);

  this.realizaConta = () => {
    try {
      const conta = eval(this.display.value);

      if(!conta) {
        alert('Conta inválida');
        return;
      }

      this.display.value = conta

    } catch(error) {
      alert('Conta inválida.');
      return;
    }
  }
}

// "Usa meu molde para criar um novo objeto de calculadora"
const calculadora = new Calculadora();  // Criando o objeto em si
calculadora.inicia();  // Executa o método "inicia", onde está tudo para funcionar lá
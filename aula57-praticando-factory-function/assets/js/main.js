// Quem chama o metodo é quem é o "this"
// Quando usamos a arrow function, o this permanece o mesmo de antes
// Quando não usado arrow function e deseja que o this seja o anterior, use .bind(this) apos as chaves da função, exemplo: function(e) {}.bind(this)

function criaCalculadora() {
  return {
    // Atributos
    display: document.querySelector('.display'),
    btnClear: document.querySelector('.btn-clear'),


    // Metodos
    inicia() {
      this.cliqueBotoes()  // Sempre que eu preciso referenciar uma chave do meu objeto dentro do meu objeto, eu preciso da palavra "this"
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener('keyup', (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    cliqueBotoes() {
      // this aqui é a calculadora
      document.addEventListener('click', (e) => {
        // O this aqui agora é document
        const el = e.target;  // Verifica todos elementos que forem clicados, pois "e" se refere ao document, que é de onde está ouvindo o evento de click

        if (el.classList.contains('btn-num')) {  // Se o elemento clicado contém a seguinte classe: 'btn-num'
          this.btnParaDisplay(el.innerText);  // Aqui o this aponta para document
        }

        if(el.classList.contains('btn-clear')) {
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')) {
          this.apagaUm();
        }

        if (el.classList.contains('btn-eq')) {
          this.realizaConta();
        }
      });
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },

    clearDisplay() {
      this.display.value = '';
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta);  // eval é uma função bem perigosa
        if (!conta) {
          alert('Conta inválida.');
          return
        }

        this.display.value = String(conta);
      } catch(e) {
        alert('Conta inválida.');
        return
      }
    }
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
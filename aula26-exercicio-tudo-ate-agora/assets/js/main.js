// Capturar evento de submit do formuário

const form = document.querySelector('.form')  // Obteve o formulario

form.addEventListener('submit', function (e) {  // o primeiro parâmetro do addEventListener é qual evento você deseja capturar (o submit no caso)
  e.preventDefault();  // Preveniu o default do submit, no caso, previniu ele de enviar o formulario, assim ele não enviará

  const pesoInput = e.target.querySelector('#peso');  // Captura os dados do usuario
  const alturaInput = e.target.querySelector('#altura');  // Captura os dados do usuario

  const peso = Number(pesoInput.value);  // Tenta converte os input para number
  const altura = Number(alturaInput.value); // Tenta converte os input para number

  if (!peso) {  // Se o peso não for avaliado como verdadeiro
    setResultado('Peso Inválido', false);  // Seta o resultado como 'Peso Inválido' e com a flag false (para usar na classe)
    return;  // Retorna e o resto do código não é executado, apenas mostrará o 'Peso Inválido' na linha acima
  }

  if (!altura) {  // Se a altura não for avaliado como verdadeiro
    setResultado('Altura inválida', false);  // Seta o resultado como 'Peso Inválido' e com a flag false (para usar na classe)
    return;  // Retorna e o resto do código não é executado, apenas mostrará o 'Peso Inválido' na linha acima
  }

  const imc = getImc(peso, altura);  // Calcula o imc com uma função que foi criada especificamente para calcular o imc
  console.log(imc);

  const nivelImc = getNivelImc(imc);  // Pegou o nivel do Imc com array, também com uma função especifica para isso

  const msg = `Seu IMC é ${imc} (${nivelImc})`  // Criou a mensagem com os valores

  setResultado(msg, true);  // Seta o resultado com a mensagem criada e com a flag true (para colocar a classe verdadeira)

});


function getNivelImc(imc) {  // Cria uma função para pegar o nível do IMC
  const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso',  // Cria um array com os nivel do IMC
  'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

  if (imc >= 39.9) return nivel[5];
  if (imc >= 34.9) return nivel[4];
  if (imc >= 29.9) return nivel[3];
  if (imc >= 24.9) return nivel[2];
  if (imc >= 18.5) return nivel[1];
  if (imc < 18.5) return nivel[0];
}

function getImc(peso, altura) {  // Função para fazer o calculo do IMC
  const imc = peso / altura ** 2;
  return imc.toFixed(2)  // Retorna e deixa apenas duas casas decimais
}

function criaP() {  // Função que cria um paragrafo
  const p = document.createElement('p');  // Cria elemento, cria um paragrafo
  return p;
}

function setResultado(msg, isValid) {  // Função que seta o resultado, com os parametros: recebe uma mensagem (msg) e se o resultado é valido (isValid)
  const resultado = document.querySelector('#resultado');  // Seleciona a div de resultado
  resultado.innerHTML = '';  // Zera o HTML do resultado

  
  const p = criaP();  // Cria um paragrafo

  if (isValid) {  // Checa se isValid foi enviada como true
    p.classList.add('paragrafo-resultado')  // Seta a classe como "paragrafo-resultado"
  } else {  // Se isValid foi enviada como false
    p.classList.add('bad')  // Seta a classe como "bad"
  }

  p.innerHTML = msg  // Seta o HTML do paragrafo com a msg que recebeu no setResultado
  resultado.appendChild(p);  // Adiciona o paragrafo no resultado
}

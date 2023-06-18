const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {  // Essa função apenas cria um li
  const li = document.createElement('li');
  return li
}

function limpaInput () {
  inputTarefa.value = '';  // Deixa o input vazio
  inputTarefa.focus();  // Ele volta o foco pro input
}

function criaBotaoApagar (li) {
  li.innerText += ' '
  const botaoApagar = document.createElement('button');
  botaoApagar.innerText = 'Apagar';
  // botaoApagar.classList.add('apagar');
  botaoApagar.setAttribute('class', 'apagar');
  botaoApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(botaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();  // Chama a função para criar um elemento li
  li.innerText = textoInput;  // Coloca o texto dentro do elemento li
  tarefas.appendChild(li);  // Coloca o li dentro de "tarefas"
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if (!inputTarefa.value) return;  // Se não ter nenhum texto, retornará e não executará nada (string vazia é false)

  criaTarefa(inputTarefa.value)  // Quando clicado no btnTarefa essa função joga o texto do input para outra função fazer o que ela tem que fazer
})

inputTarefa.addEventListener('keypress', function(e) {  // Ouvir quando uma tecla for pressionada
  if (e.keyCode === 13) {  // Se o código da tecla que foi ouvida for igual a 13
    if (!inputTarefa.value) return;  

    criaTarefa(inputTarefa.value)
  }
});

document.addEventListener('click', function (e) {  // Ouvir click no document todo
  const el = e.target;
  if (el.classList.contains('apagar')) {  // Se o click for no elemento que possui a classe apagar
    el.parentElement.remove()  // Desse elemento clicado, o pai dele vai ser removido
    salvarTarefas()
  }
});

function salvarTarefas () {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);  // Converte para o JSON como string
  localStorage.setItem('tarefas', tarefasJSON);  // Só é possivel salvar em string
}

function adicionaTarefasSalvas () {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);  // Converte de volta para um objeto JavaScript
  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa)
  }
}
adicionaTarefasSalvas()
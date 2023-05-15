/*
const nome = 'Gabriel';  // Escopo global

function qualquer() {
    // Escopo função (não global), tudo aqui fica apenas aqui 
}
*/


function meuEscopo () {  // Criar nossas coisas dentro de um escopo para não poluir o escopo global
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function recebeEventoForm(evento) {
        evento.preventDefault();  // Faz não executar o que estava programado como default

        const nome = form.querySelector('.nome');  // Buscando coisas que está dentro do form
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value}` +
        ` ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm); // Faz o botão submit não atualizar página toda vez que clicado
}

meuEscopo();
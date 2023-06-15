/*
try {
  // É executada quando não há erros
} catch (error) {
  // É executada quando há erros
} finally {
  // É executado sempre
}
*/

try {
  // console.log(a);
  console.log('Abri um arquivo');
  console.log('Manipulei o arquivo e gerou um erro');
  console.log('Fechei o arquivo');

  try {
    console.log(b);
  } catch (e) {
    console.log('Deu erro');
  } finally {
    console.log('Também sou finally');
  }
} catch (error) {
  console.log('Tratando o erro');
} finally {
  console.log('FINALLY: Eu sempre sou executado');
}

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=');

function retornaHora (data) {
  if (data && !(data instanceof Date)) {  // Se data for diferenta da instancia de Date
    throw new TypeError('Esperando instância de Date.')
  }

  if (!data) {
    data = new Date();
  }

  return data.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
}

try {
  const data = new Date('01-01-1970 12:58:12');
  const hora = retornaHora();
  console.log(hora);
} catch (err) {
  // Tratar erro
  // console.log(err);
} finally {
  console.log('Tenha um bom dia.');
}

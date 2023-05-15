const nome = 'Gabriel D.';
const sobrenome = 'Santos';
const idade = 17;
const peso = 70;
const alturaEmM = 1.85;
let indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
let anoNascimento = 2023 - idade;

// console.log(nome + ' ' + sobrenome + ' tem ' + idade + ' anos, pesa ' + peso + 'kg, tem ' + alturaEmM + ' de altura');
// console.log('E seu IMC é de ' + indiceMassaCorporal);
// console.log(nome + ' ' + sobrenome + ' nasceu em ' + anoNascimento);

// Template Strings

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso}kg, tem ${alturaEmM}m de altura`);
console.log(`E seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}`);

/*
Template de strings são feitas entre crases (``), e usa ${}.
*/
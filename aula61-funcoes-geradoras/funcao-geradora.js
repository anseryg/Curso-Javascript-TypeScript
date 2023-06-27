// return faz com que a função acabe ali.
// yield faz com que possa continuar de onde parou caso a funão seja chamada novamente depois.
// Funções Geradoras tem * na frente do function. function* nome(){}


function* geradora1 () {  // Quando eu chamar a função
  // Código Qualquer ...
  yield 'Valor 1';  // Ela vai me retornar o primeiro valor
  // Código Qualquer ...
  yield 'Valor 2';  // Na próxima vez que eu a chamar, ela me retornará o próximo valor
  // Código Qualquer ...
  yield 'Valor 3';  // E assim por diante...
}

const g1 = geradora1();  // Object [Generator] {}

console.log(g1.next());
// >_ { value: 'Valor 1', done: false}  // O value é o valor "retornado", como essa é a primeira chamada, ele retornou o valor 1, e "done" é se a função geradora já atingiu seu limite e retornou todos valores

console.log(g1.next().value);  // .value entrega apenas o valor
console.log(g1.next());
console.log(g1.next());  // Acabou os valors, então done fica true


console.log('===================================');


function* geradora2 () {  // Um gerador básicamente inifinito
  let i = 0

  while (true) {
    yield i;
    i++;
  }
}

const g2 = geradora2();

console.log(g2.next().value);  // Sempre que eu pedir um valor ele vai me entregando, pois é infinito
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value);


console.log('===================================');


function* geradora3 () {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora4 () {
  yield* geradora3();  // Vincluei o gerador 3 ao 4
  yield 3;
  yield 4;
  yield 5;
}

const g4 = geradora4();  // Como gerador4 está puxando do gerador3, então o gerador4 também realiza a função do gerador3
for (let valor of g4) {
  console.log(valor);
}


console.log('===================================');


function* geradora5 () {
  yield function () {
    console.log('Vim do y1');
  };

  // ...

  yield function () {
    console.log('Vim do y2');
  }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;

func1();  // Realiza as funções através do yield
func2();
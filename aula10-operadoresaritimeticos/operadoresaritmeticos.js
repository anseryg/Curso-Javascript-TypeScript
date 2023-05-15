/*
 * Operadores Aritméticos
 * + -> Adição / Concatenação
 * - -> Subtração
 * * -> Multiplicação
 * / -> Divisão
 * ** -> Potenciação/Elevação
 * % -> Resto da divisão
 */

/*
 * Operadores de Incremento/Decremento
 * ++ -> Operador de Incremento: Soma Si mesmo + 1 e altera o valor, você pode colocar antes ou depois da variável
se colocar depois (contador++) e pedir para printar no console, ele irá printar o valor que estava antes, porém vai somar
se colocar antes (++contador) e pedir pra printar, ele vai mostrar o valor ja alterado.
(Recomendado e uma boa prática de programação pedir incremento em uma linha separada e depois utiliza-lo,
    e não incrementar na mesma chamada que outro comando)
 * -- -> Operador de Decremento: Mesma lógica do de Incremento, porém subtrai.
 */

/**
 * Operadores de Atribuição
 * += -> Soma a um valor que você atribuiu a variável que você deseja
 * -= -> Subtrai a um valor que você atribuiu a variável que você deseja
 * *= -> Multiplica a um valor que você atribuiu a variável que você deseja
 * **= -> Potenciação a um valor que você atribuiu a variável que você deseja
 */


/*
Assim como na matemática, no JavaScript os operadores obedecem a
Ordem de precedência:
1° -> Parênteses ()
2° -> Expoentes **
3° -> Multiplicação * e Divisão / % (da esquerda para a direita)
4° -> Adição + e Subtração - (da esquerda para a direita).
*/

/*
Posso converter uma string com numero para um number inteiro ou float
Exemplo:
parseInt('5')
parseFloat('5.2')

Também é possivel fazer o javascript "se virar" para entender se é float ou int
Exemplo:
Number('5')  // 5
Number('5.2')  // 5.2
*/

// NaN -> Not a Number

// Adição (+)
let num1 = 5;
let num2 = 10;
console.log(num1 + num2); // 15

// Concatenação (+)
num1 = '5';
console.log(num1 + num2); // 510

// Subtração (-)
num1 = 5
console.log(num1 - num2)

// Multiplcação (*)
console.log(num1 * num2);

// Divisão (/)
console.log(num1 / num2);

// Potenciação (**)
num1 = 2;
num2 = 5;
console.log(num1 ** num2);

// Resto da divisão (%)
num1 = 10;
num2 = 3;
console.log(num1 % num2);



// Operador de Incremento
let contador = 1;
contador++;
console.log(contador);

// Operador de Decremento
contador = 10;
contador--;
console.log(contador);



// Operadores de Atribuição
contador = 0;
contador += 2 // contador = contador + 2;
console.log(contador);



// Exemplo de NaN
num1 = 10;
num2 = 'Gabriel'
console.log(num1 * num2);
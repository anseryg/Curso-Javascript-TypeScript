const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2); // Concatena o array1 com array2
console.log(array3);  // [ 1, 2, 3, 4, 5, 6 ]



const array4 = array1.concat(array2, [7, 8, 9], 'Gabriel')  // Concatena o Array 1 com o array2, concatena/adiciona o array literal que foi passado e o nome
console.log(array4);  // [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 'Gabriel' ]



// ... rest (resto) -> ... spread (espalhar)
const array5 = [...array1, ...array2];  // Pega o array1 e o array2
console.log(array5);  // [ 1, 2, 3, 4, 5, 6 ]
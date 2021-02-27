let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maiorValor = 1;

for (let cont = 0; cont < numbers.length; cont++) {
  if (numbers[cont] > maiorValor) {
    maiorValor = numbers[cont];
  }
  
}
console.log(maiorValor);


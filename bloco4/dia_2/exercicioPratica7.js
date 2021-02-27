let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero = 1000;

for (let cont = 0; cont < numbers.length; cont++) {
  if (numbers[cont] < menorNumero) {
    menorNumero = numbers[cont];
  }
}

console.log(menorNumero);
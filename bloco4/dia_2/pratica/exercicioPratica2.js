//exercicio 2: Para o segundo exercício, você deve somar todos os valores contidos no array e imprimir o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbers = 0;
for(cont = 0; cont < numbers.length ; cont ++){
    
    somaNumbers = numbers[cont] + somaNumbers;
    
}
console.log(somaNumbers);
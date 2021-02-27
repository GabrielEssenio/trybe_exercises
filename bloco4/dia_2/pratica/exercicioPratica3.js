//exercicio 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array 
//A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let somaNumbers = 0;
for(cont = 0; cont < numbers.length ; cont ++){
    
    somaNumbers += numbers[cont] ;
    
}
let mediaAritmetrica = somaNumbers/numbers.length; 

console.log("A meida Aritmetrica é" + mediaAritmetrica);
console.log("A soma dos numero é de " + somaNumbers);
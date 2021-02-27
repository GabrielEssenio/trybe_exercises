let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result =0;

for(cont=0; cont < numbers.length; cont += 1){
    if(numbers[cont] %2 != 0 ){
        console.log(numbers[cont]);
        result += 1;
    }
}

if (result == 0) {
    console.log('nenhum valor ímpar encontrado');
  }
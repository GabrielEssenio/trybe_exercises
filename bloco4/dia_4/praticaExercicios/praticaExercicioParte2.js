// exercicio 1
function verificaPalindrome(string) {
    let reverse = string.split("").reverse().join("");
    if (reverse === string) {
      return true;
    } else {
      return false;
    }
  }
  
  console.log(verificaPalindrome('arara')); 
  console.log(verificaPalindrome('desenvolvimento')); 

  //exercicio 2
  array =[2, 3, 6, 7, 10, 1]; 
  console.log(arrayInteiros(array));
  function arrayInteiros (arrayNumero) {
      let maiorArray;  
      for(cont=1; cont < arrayNumero.length; cont++){
        if(arrayNumero[cont] > arrayNumero[cont-1]){
            maiorArray = cont;
        }
    }
    return maiorArray;
    
  }

  //exercicio 3

  array2 =[2, 4, 6, 7, 10, 0, -3]; 
  console.log(arrayInteiros2(array2));
  function arrayInteiros2 (arrayNumero2) {
      let menorArray;  
      for(cont=1; cont < arrayNumero2.length; cont++){
        if(arrayNumero2[cont] < arrayNumero2[cont-1]){
            menorArray = cont;
        }
    }
    return menorArray;
    
  }

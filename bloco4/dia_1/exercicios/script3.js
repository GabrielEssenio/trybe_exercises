let nota = 100;

if(nota > 80 && nota <= 100){
    console.log("Parabens você foi aprovado")
}else if(nota >= 60 && nota < 80){
    console.log("Você está na lista de espera")
}else if(nota < 60 && nota >= 0){
    console.log("Você foi reprovado")
}else{
    console.log("Nota não existente")
}

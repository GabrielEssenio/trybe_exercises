// exercicio 1 de fixação
const name = "Gabriel Essênio";
const birthCity = "Monte Carmelo";
let birthYear = "1997";

birthYear = "1996"
birthCity = "Brasilia"

console.log(birthYear)
console.log(birthCity)
console.log(name)

// exercicio 2 de fixação

let patientId = '50';
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log(typeof patientAge)
console.log(typeof patientId)


// exercicio 3 de fixação

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

// exercicio 4 de fixação

let estadoCandidata;

estadoCandidata ="lista"

switch(estadoCandidata){
    
    case "aprovada":
        console.log("Parabens você foi aprovada");
        break; 

    case "lista":
        console.log("Você  ta na lista de espera");
        break; 

    case "reprovada":
        console.log("Infelizmente você foi reprovada");
        break; 
}


//exercicio calcular área e perimetro do retangulo

let base = 5;
let altura = 8;
let perimetro;
let area;

area = altura*base;
perimetro = 2*base+2*altura;


console.log (area)
console.log (perimetro)


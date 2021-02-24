let a;
let b;
let c;
let d;
let e;

a = 156;
b = 142;
c = 145;
d = -7;

let adicao = a+b;
console.log(adicao);

let subtracao = a-b;
console.log(subtracao);

let multiplicacao = a*b;
console.log(multiplicacao);

let divisao = a/b;
console.log(divisao);

let modulo = a%b;
console.log(modulo);

if(a>b){
    console.log("O maior numero entre A e B é " + a);
}else if(a<b){
    console.log("O maior numero entre A e B é " + b);
}else{
    console.log("A e B são iguais");
}

if(a>b && a>c){
    
    console.log("O maior numero entre A e B e C é " + a);
}else if(b>a && b>c){
    console.log("O maior numero entre A e B e C é " + b);
}else if (c>a && c>b){
    console.log("O maior numero entre A e B e C é " + c);
}


if(d >= 0 ){
    e = true
    console.log(e)
}else{
    e = false
    console.log(e)
}
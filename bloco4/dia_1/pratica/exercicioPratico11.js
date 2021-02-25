//praticando exercicio 11

let salarioBruto = 3000;
let salarioLiquido;
let INSS;
let IR;
let aliquota;

if(salarioBruto <= 1556.94){
	INSS = 0.8 * salarioBruto;
	aliquota = salarioBruto - INSS;
}else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92){
	INSS = 0.9 * salarioBruto;
	aliquota = salarioBruto - INSS;
}else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82){
	INSS = 0.11 * salarioBruto;
	aliquota = salarioBruto - INSS;
}else if (salarioBruto > 5189.82){
	INSS = 570.88;
	aliquota = salarioBruto - INSS;
}


if(aliquota <= 1903.98){
	IR = 0;
}else if (aliquota > 1903.98 && aliquota <= 2826.65){
	IR = (0.075 * aliquota) - 142.80;
}else if (aliquota > 2826.65 && aliquota <= 3751.05){
	IR = (0.15 * aliquota) - 354.80;
}else if (aliquota > 3751.05 && aliquota <= 4664.68){
	IR = (0.225 * aliquota) - 636.13;
}else{
	IR = (0.275 * aliquota) - 869.36;
}


salarioLiquido = aliquota -IR;
console.log(salarioLiquido);
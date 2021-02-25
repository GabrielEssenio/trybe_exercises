//praticando exercicio 10

let valorVenda = 200;
let custoProduto = 40;
let quantidadesVendidas = 1000;
let imposto = custoProduto * 0.2
let valorCustoTotal = custoProduto + imposto;

if (valorVenda < 0 || custoProduto < 0) {
	console.log("Valor invalido");
}

let lucro = valorVenda - valorCustoTotal;
console.log(lucro * quantidadesVendidas);

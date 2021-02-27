let n = 5;
let cont;
let linha;
let imprime = '';
let simbolo = '*';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight= midOfMatrix;

for (cont = 0; cont <= midOfMatrix; cont += 1) {
  for (linha = 1; linha <= n; linha += 1) {
    if (linha > controlRight && linha < controlLeft) {
      imprime = imprime + simbolo;
    } else {
      imprime = imprime + ' ';
    }
  }
  console.log(imprime);
  imprime = '';
  controlRight -= 1;
  controlLeft += 1;
};
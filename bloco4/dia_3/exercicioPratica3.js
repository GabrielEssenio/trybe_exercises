let n = 5;
let simbolo = '*';
let imprime = '';
let posicao = n;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex < posicao) {
      imprime = imprime + ' ';
    } else {
      imprime = imprime + simbolo;
    }
  }
  console.log(imprime);
  imprime = '';
  posicao -= 1;
};
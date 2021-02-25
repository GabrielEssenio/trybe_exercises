//praticando exercicio 7

let notaDada = 101;

if (notaDada < 0 || notaDada > 100) {
	console.log("Nota invalida");
} else if (notaDada >= 90) {
	console.log("Conceito A");
} else if (notaDada >= 80) {
	console.log("Conceito B");
} else if (notaDada >= 70) {
	console.log("Conceito C");
} else if (notaDada >= 60) {
	console.log("Conceito D");
} else if (notaDada >= 50) {
	console.log("Conceito E");
} else {
	console.log("Conceito F");
}
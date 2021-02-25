//praticando exercicio 6

let pecaXadrez = "CaVaLO";

switch (pecaXadrez.toLowerCase()) {
	case "bispo":
		console.log("O bispo é uma peça que só pode se movar na diagonal de onde está");
		break;

	case "torre":
		console.log("A torre é uma peça que pode tanto se mover na vertical quanto na horizontal");
		break;

	case "rei":
		console.log("O rei é peça chave do Xadres que determina quem vai ganhar, ele pode se mover pra qualquer casa (1 de espaço) para todas direções");
		break;

	case "cavalo":
		console.log("O cavalo é uma peça que só pode se mover em formado de podendo ser 2 na horizontal e 3 na vertical ou 3 na horizontal e 2 na vertical, ele pode fazer o L sobre as outras peças.");
		break;

	case "rainha":
		console.log("A rainha é a peça que mais pode fazer movimentos no jogo , ela pode se mover para todas as direções (horizontal, vertical , diagonal) e ir para qualquer distancia nessas direções.");
		break;

	case "peão":
		console.log("O peão se movimenta apenas uma casa para frente só pode Matar outras peças na diagonal com 1 de espaço");
		break;

	default:
		console.log("Peça inexistente");
}
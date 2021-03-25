const testingScope = escopo => {
    if (escopo === true) {
        var ifScope = `Não devo ser utilizada fora do meu escopo (if)
         ótimo, fui utilizada no escopo !`;
        console.log(ifScope);
    } else {
        var elseScope = `Não devo ser utilizada fora meu escopo (else)`;
        console.log(elseScope);
    }
    console.log(`${ifScope} o que estou fazendo aqui ? :O`);
}

testingScope(true);




const ordenaArray = oddsAndEvens => {
    let arrayOrdenado = oddsAndEvens.sort();
    console.log(arrayOrdenado);
}
ordenaArray([13, 3, 4, 9, 7, 2]);


const factorial = number => {
    let result = 1

    for (let index = 2; index <= number; index += 1) {
        result *= index;
    }

    return result
}

console.log(factorial(5))


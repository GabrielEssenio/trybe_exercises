const myPromese = () => {
    const fetchPromise = new Promise((resolve, reject) => {
        const myArray = [];
        for (i = 0; i < 10; i += 1) {
            const randomNumber = Math.floor(Math.random() * 50) + 1;
            myArray.push(randomNumber);
        }

        const numberQuadrado = myArray.map((number) => number * number);
        const sum = numberQuadrado.reduce((acc, curr) => acc + curr);
        (sum < 10000) ? resolve(sum) : reject(sum);
        sum.map()
    });
    const divArray = [2, 3, 5, 10];
    fetchPromise
        .then((sum) => console.log(divArray.map((number) => sum / number)))
        .then(x => x.reduce((acc, curr) => acc + curr), 0)
        .catch((sum) => console.log('É mas de oito mil ' + sum));
}

myPromese();

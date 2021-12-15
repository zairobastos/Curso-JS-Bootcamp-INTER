const pares = (array) =>{
    let arrayPar = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 == 0) {
            arrayPar.push(array[index])
        }
    }
    console.log(JSON.stringify(arrayPar));
}

let array = [1, 2, 3, 4, 5, 6];
pares(array);
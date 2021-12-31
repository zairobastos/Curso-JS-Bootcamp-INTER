function mape(array) {
    return array.map(function (item) {
        return item * 3;
    })
}

const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13];

console.log(`Map: [${mape(numeros)}]`);
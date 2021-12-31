function filtrarPares(array) {
    return array.filter(callback)
}

function callback(item) {
    return item % 2 === 0;
}

const array = [1,2,3,5,6,8,9,10,11,12,13,14,15];

console.log(`Filter: ${filtrarPares(array)}`);
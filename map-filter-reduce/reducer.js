function somaNumeros(array) {
    return array.reduce(function(prev,current){
        return prev + current;
    });
}

const array = [1,2,3];

console.log(somaNumeros(array));
const maca = {
    value:2,
}

const laranja = {
    value:3,
}

function mapThis(arr,thisArg) {
    return arr.map(function (item){
        return item * this.value;
    },thisArg)
}

const array = [2,4,7];
console.log(`this -> maçã: ${mapThis(array, maca)}`);
console.log(`this -> laranja: ${mapThis(array, laranja)}`);
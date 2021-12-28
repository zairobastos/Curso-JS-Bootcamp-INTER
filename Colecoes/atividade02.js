const array =[30, 30, 40, 5, 223, 2049, 3034, 5];

function mySet(arr){
    const setagem = new Set(arr);

    return [...setagem];
}

console.log(mySet(array));
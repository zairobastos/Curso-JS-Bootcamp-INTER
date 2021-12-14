let array = ["Zairo Bastos", "Fluminense", ["Flu", "Flu", "Flu", "Flu", "Flu"], "E aí vira bagunça", 1952, 1902];
console.log(array);

//Acessando valores do meu array
console.log(array[2][1]);

//for each
array.forEach(
    function(item, id){
        console.log(`${item} - ${id}`);
    }
);

//Push
array.push(['Ceará']);
console.log("Utilizando o método Push: " + JSON.stringify(array));

//pop
array.pop();
console.log("Utilizando o método POP: " + JSON.stringify(array));

//Shift
array.shift();
console.log("Utilizando o método Shift: " + JSON.stringify(array));

//Unshift
array.unshift('ZB');
console.log("Utilizando o método Unshift: "+ JSON.stringify(array));

//indexof
console.log(array.indexOf('ZB'));

//splice
console.log(array.splice(0,2));

//slice
let newArray = array.slice(0,4);
console.log("Utilizando o método slice: "+ JSON.stringify(newArray))


//Objetos

let user = {
    name: "Luiz Zairo Bastos Viana",
    idade: 19,
    datNascimento: "28/01/2002"
}

let {name, idade, datNascimento} = user;

console.log(`Nome do usuário: ${name} - Idade: ${idade} - Data de Nascimento: ${datNascimento}`);
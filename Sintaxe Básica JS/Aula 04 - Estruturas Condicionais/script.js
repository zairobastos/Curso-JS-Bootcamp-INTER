let jogador1 = 0;
let jogador2 = 0;
let placar;

if(jogador1 != -1){
    if (jogador1>0) {
        console.log("Jogador 1 marcou ponto!");
    }else if (jogador2>0){
        console.log("Jogador 2 marcou ponto!");
    }else{
        console.log("Ninguém marcou ponto!");
    }
}

//Convertendo um objeto em array
let array = [];
let user = {
    username: "Zairo Bastos",
    idade: 19,
    sexo: "Masculino"
};

for (const key in user) {
    array.push(user[key]);
}
console.log(JSON.stringify(array));
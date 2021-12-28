const alunos=[
    {
        nome:'Zairo',
        nota:5
    },
    {
        nome:'Luiz',
        nota:7
    },
    {
        nome:'Emanuelle',
        nota:10
    }
]
function media(array,mediaFinal){
    let aprovados= [];
    for (let i = 0; i < array.length; i++) {
        const {nome,nota} = array[i];
        if(nota >= mediaFinal){
            aprovados.push(nome);
        }
    }
    return console.log(aprovados);
}

media(alunos,7);
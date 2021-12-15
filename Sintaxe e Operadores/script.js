const comparacao = (n1,n2) => {
    let texto = n1 == n2 ? `Os números ${n1} e ${n2} são iguais.` : `Os números ${n1} e ${n2} não são iguais.`;
    let soma = n1+n2;

    const comp = (soma) => {
        if(soma<10){
            console.log(`${texto} Sua soma é ${soma}, que é menor que 10 e menor que 20.`);
        }else if(soma>20){
            console.log(`${texto} Sua soma é ${soma}, que é maior que 10 e maior que 20.`);
        }else if(soma>10 && soma<20){
            console.log(`${texto} Sua soma é ${soma}, que é maior que 10 e menor que 20.`);
        }else if(soma==10){
            console.log(`${texto} Sua soma é ${soma}, que é igual a 10 e menor que 20.`);
        }else if(soma==20){
            console.log(`${texto} Sua soma é ${soma}, que é maior que 10 e igual a 20.`);
        }else{
            console.log("Error! Valor não corresponte a um número.");
        }
    }

    comp(soma);
}

comparacao(10,3);
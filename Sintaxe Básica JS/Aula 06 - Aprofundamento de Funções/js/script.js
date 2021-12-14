function calculadora() {
    const operacao = prompt("Escolha uma operação: \n 1. Soma (+) \n 2. Subtração (-) \n 3. Multiplicação (x) \n 4. divisão (/) \n 5. Potência (**)");

    let n1 = Number(prompt("Digite o primeiro valor: "));
    let n2 = Number(prompt("Digite o segundo valor: "));

    function soma() {
        let result = n1+n2;
        alert(`${n1} + ${n2} = ${result}`);
    }
    function sub() {
        let result = n1-n2;
        alert(`${n1} - ${n2} = ${result}`);
    }
    function mult() {
        let result = n1*n2;
        alert(`${n1} x ${n2} = ${result}`);
    }
    function divi() {
        let result = n1/n2;
        alert(`${n1} / ${n2} = ${result}`);
    }
    function potencia(){
        let result = n1**n2;
        alert(`${n1}^${n2} = ${result}`);
    }

    if (operacao==1) {
        soma();
    }else if (operacao==2) {
        sub();
    }else if (operacao==3){
        mult();
    }else if (operacao==4){
        divi();
    }else if (operacao==5){
        potencia();
    }else{
        alert("Opção inválida");
    }

}
calculadora()
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const people1 = {
    nome:'ZB Músicas',
    idade:19
}
const people2 = {
    nome:'Zairo Bastos',
    idade:20
}

console.log(calculaIdade.call(people1, 30));
console.log(calculaIdade.apply(people2, [30]));
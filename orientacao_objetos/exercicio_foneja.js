class Cliente {
    constructor(nome, cpf, dataDaCompra, valor, modeloDoCelular, anoDoCelular, corDoCelular, loja, atendente) {
        this.nome = nome;
        this.cpf = cpf;
        this.dataDaCompra = dataDaCompra;
        this.valor = valor;
        this.modeloDoCelular = modeloDoCelular;
        this.anoDoCelular = anoDoCelular;
        this.corDoCelular = corDoCelular.toLowerCase();
        this.loja = loja;
        this.atendente = atendente;
    }


    descontar() {
        if (this.valor > 1500) {
            return `Terá um desconto de 10%`
        } else {
            return `Não terá desconto`
        }
    }

    verificaCor() {
        const cor = this.corDoCelular === "roxo" ? `Cor disponível` : `Cor indisponível`
        return cor;
    }
}

// EM TERNÁRIO:
// const descontar = this.valor < 1500 ? `Terá desconto de 10%` : `Não terá desconto`
// return descontar;


const cliente1 = new Cliente('Dora Barreto', '223.001.221-29', '21/12/20', 2000, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria');
console.log('Primeira cliente: ', cliente1)
console.log('Terá desconto? ', cliente1.descontar())
console.log('Cor disponível?', cliente1.verificaCor())
const cliente2 = new Cliente('Marcela Janino Silva', '321.101.231-29', '21/10/20', 1300, 'XXM-y', 2019, 'ROXO', 'SP-BR', 'Drielly Gomes Almeida');
console.log('Primeira cliente: ', cliente2)
console.log('Terá desconto? ', cliente2.descontar())
console.log('Cor disponível?', cliente2.verificaCor())
const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', '21/3/20', 4000, 'MDM-PRO', 2020, 'AZUL', 'MG-BR', 'Fran Carneiro de Pinha');
console.log('Primeira cliente: ', cliente3)
console.log('Terá desconto? ', cliente3.descontar())
console.log('Cor disponível?', cliente3.verificaCor())
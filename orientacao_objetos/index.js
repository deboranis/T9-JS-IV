<<<<<<< HEAD
class Cliente {
    constructor(nome, email, cpf) { //vai construir pelos paramentros que estamos passando
        this.nome = nome;
        this.email = email;
        this.cpf = cpf;
    }
}

const cliente1 = new Cliente('Jessica', 'jessica@email.com', 999999999 - 98)
const cliente2 = new Cliente('Debs', 'debs@debs.com', 234766544 - 00)

console.log('Dados da cliente: ', cliente1)

class celular {
    constructor(nome, modelo, valor) {
        this.nome = nome;
        this.modelo = modelo;
        this.valor = valor;
    }
}

const celular1 = new celular('super x', 'xx-y', 900)
=======
import { Cliente } from './Cliente.js';


const cliente1 = new Cliente('Dora Ribeiro', '223.001.221-29', 1500, 'XXX-12', 2020, 'Amarelo', 'RJ-BR', 'Joana Maria ')
console.log('Primeira cliente: ', cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificarCor())


console.log('------------------------')

const cliente2 = new Cliente('Marcela Janino Silva', '321.101.231-29', 3000, 'XXM-y', 2019, 'Roxo', 'SP-BR', 'Drielly Gomes Almeida')
console.log('Segunda cliente: ', cliente2)
console.log(cliente2.verificarCor())
console.log(cliente2.descontar())


console.log('------------------------')

const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', 2020, 'Azul', 'MG-BR', 'Fran Carneiro de Pinha')
console.log('Segunda cliente: ', cliente3)
console.log(cliente3.descontar())

>>>>>>> cdb3cdde2f33b31c1f6ee5aff5b52e937395d0ca

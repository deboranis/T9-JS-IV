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
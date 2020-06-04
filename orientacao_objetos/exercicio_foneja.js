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
        if (this.valor <= 1500) {
            const porcentagem = (this.valor * 5 / 100);
            return `Terá um desconto de 5%, ou R$${porcentagem}. O valor do pagamento é R$${this.valor - porcentagem}.`
        } else if (this.valor > 1500 && this.valor <= 3000) {
            const porcentagem = (this.valor * 7) / 100;
            return `Terá um desconto de 7%, ou R$${porcentagem}. O valor do pagamento é R$${this.valor - porcentagem}.`
        } else if (this.valor > 3000) {
            const porcentagem = (this.valor * 10) / 100;
            return `Terá um desconto de 10%, ou R$${porcentagem}. O valor do pagamento é R$${this.valor - porcentagem}.`
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


// //////EXERCICIOS DO QUIZ


// class Colaboradores {
//     constructor(nome, departamento, funcao) {
//         this.nome = nome;
//         this.departamento = departamento;
//         this.funcao = funcao;
//     }
// }

// class Usuario {
//     constructor(nome, email, confirmacaoEmail) {
//     this.nome = nome;
//     this.email = email.toLowerCase;
//     this.confirmacaoEmail = confirmacaoEmail.toLowerCase;
//     }

//     verificador() {
//     const emailIgual = this.email === this.confirmacaoEmail ? `email conferido` : `email inválido`;
//     return emailIgual;
//     }
//     }

//     const user1 = new Usuario('Moana', 'meU@email.com', 'MEU@email.com')
//     console.log(user1.verificador())

//     //Crie um metodo que confirme se os dois emails são iguais ou diferentes. Lembre-se de tratar o campo de emails, colocando-os em letras minúsculas e testando o código para verificar se realmente deu certo. 

//     class Usuario {
//         constructor(nome, sobrenome, email, confirmacaoEmail) {
//         this.nome = nome;
//         this.sobrenome = sobrenome;
//         this.email = email;
//         this.confirmacaoEmail = confirmacaoEmail;
//         }

//         saudacao() {
//             return `Olá ${nome} ${sobrenome}, seja bem vinda à plataforma de estudos da Reprograma!`
//         }
//         }

//         //////6. Insira uma propriedade chamada sobrenome na classe Usuario. Em seguida, crie um método de saudações e retorne a seguinte frase: `Olá nome sobrenome, seja bem vinda a plataforma de estudos da Reprograma!`
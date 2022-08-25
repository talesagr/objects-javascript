class Cliente{
    constructor(nome, email, cpf, saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor) {
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(`O saldo de sua conta é: ${this.saldo}`)
    }
}

const andre = new Cliente("Andre","andre@gmail","03392349038",2500)

andre.exibirSaldo()

console.log(andre)
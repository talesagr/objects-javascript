function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    
    this.cpf = cpf
    
    this.email = email
    
    this.saldo = saldo

    this.depositar = function(valor){
        this.saldo+=valor
    }
}

const andre = new Cliente("André","012456789","email@email.com.br",2500)

console.log(andre)
    function Cliente(nome, cpf, email, saldo){
        this.nome = nome
        this.cpf = cpf
        this.email = email
        this.saldo = saldo
        this.depositar = function(valor){
            this.saldo+=valor
        }
    }

    const andrezito = new Cliente("Andrezito","5544887769","ju@akbjds.com",99)


    function ClientePoupanca(nome,cpf,email,saldo,saldoPoup){

        Cliente.call(this, nome,cpf,email,saldo)
        this.saldoPoup = saldoPoup
    }

    const ju = new ClientePoupanca("Julia","5544887769","ju@akbjds.com",2500,15000)

    console.log(ju)

    ClientePoupanca.prototype.depositarPoup = function(valor){
        this.saldoPoup += valor
    }
    ju.depositarPoup(4500000)
    console.log(ju.saldoPoup)
    console.log(andrezito.saldoPoup)

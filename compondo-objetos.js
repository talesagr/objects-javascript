const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@gmail.com",
    fones:["5599887754","51996655458"]
}

cliente.dependentes = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"20/03/2011",
}

console.log(cliente)

cliente.dependentes.nome = "Sara Silva"

console.log(cliente)
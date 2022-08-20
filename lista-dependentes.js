const cliente = {
    nome:"Andre",
    idade:36,
    cpf:"123456789",
    email:"andre@gmail.com",
    fones:["5599887754","51996655458"],
    dependentes: [{
        nome: "Sara Silva",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome:"Samia Maria",
    parentesco:"filha",
    dataNasc:"04/01/2014"
})

//console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter(dependente => dependente.dataNasc==="04/01/2014")

console.log(filhaMaisNova[0].nome)
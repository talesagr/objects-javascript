const clientes = [
    {
        nome:"Andre",
        idade:36,
        cpf:"123456789",
        email:"andre@gmail.com",
        fones:["5599887754","51996655458"],
        dependentes: [{
            nome: "Sara Silva",
            parentesco: "filha",
            dataNasc: "20/03/2011"},
            {
            nome:"Samia Maria",
            parentesco:"filha",
            dataNasc:"04/01/2014"
            }],
    },
    {
        nome: "Juliana",
        cpf: "5465456456",
        dependentes: [{
            nome: "Sophia",
            parentesco: "filha",
            dataNasc: "30/08/2020"
            }],
    }
]

const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes]

console.table(listaDependentes)
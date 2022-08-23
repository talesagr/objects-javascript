const cliente = {
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
    saldo: 100,
    depositar:function(valor){
        this.saldo+=valor
    }
}

function oferecerSeguro(obj) {
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }

}
console.log(Object.values(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)
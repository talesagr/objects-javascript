const Clientes = [
{
    id:1,
    nome: "Joao",
    idade: 30,
    dependentes:[ 
    {
        nome: 'SARUMAN THE MAN',
        idade: 69
    }]

},
{
    id:2,
    nome: "Andreia",
    idade: 69,
    dependentes: [
    {
        nome: 'GANDALF EL WHITE',
        idade: 55
    }]
},
{    
    id:3,
    nome: "Adriano",
    idade: 70,
    dependentes:[ 
    {
        nome: 'COLDZERA THE MYTH',
        idade: 98
    }]
}
]

const listaDeClientes = [...Clientes[0].dependentes, ...Clientes[1].dependentes, ...Clientes[2].dependentes]

console.table(listaDeClientes)
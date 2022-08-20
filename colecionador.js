/*
Há duas formas de acessar o valor de propriedade de um objeto no JavaScript e podemos usar qualquer uma delas.
 Vamos praticar?
 Crie um novo objeto colecionador, como fizemos no vídeo.
*/

const colecionador = {
    nome: "Tales",
    idade: 23,
    colecao: [{
        pacote: "Anime",
        personagem: "Naruto",
        poder: "Rasengan"        
    },{
        pacote: "futebol",
        personagem: "Messi",
        poder: "drible"
    }],
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
        for(i = 0; i < 4; i++) {
            colecionador.adicionarTipo("colecao","HQ"+i)
        } 
    }
      
}

console.log(colecionador.colecao[0].personagem)

console.log(colecionador["colecao"])

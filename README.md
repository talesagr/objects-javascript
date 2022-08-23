# objects-javascript

### O que são objetos
Estrutura de dados que permitem armazenar informações de maneira mais organizada dentro de um único objeto
Elas são compostas por chave e valor, por exemplo:
const pessoa = {
   nome:"Bruce Banner",
   dataNascimento:"25/01/1980",
   carteiraIdentidade:"997776-X",
   email:"profbanner@email.com",
   telefone:"+552877776666",
   cidade:"Cachoeiro de Itapemirim",
   estado:"ES"
}

Para acessar dados em um objeto podemos usar as notações de ponto e de colchete



## Adicionando novos campos:

Para adicionar novas propriedades precisamos somente informar o novo campo e o seu valor, (por exemplo, pessoa.cpf=”12345678955-55”).

Para exibir os 4 primeiros dígitos de uma string, chamamos uma função de string, chamada substring(), e passamos o início e o fim da string que queremos, por exemplo: pessoa.cpf.substring(0,4)
Podemos usar a notação de ponto para adicionar novos campos a objetos já criados, lembrando de iniciar o campo adicionado. Como os campos identidade e CPF são do tipo string, podemos invocar o método substring() passando para função a faixa da string que queremos retornar


## Manipulação de objetos

Objeto Literal e referência
Objeto literal é um objeto criado com a notação literal, ou seja: uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser acessado depois. Os objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele.

Quando o JavaScript trabalha com objetos, ele acessa os valores deles fazendo referencia ao original, mas não cria uma cópia. Já o acesso por cópia funciona com tipos primitios (string, number, boolean, null, symbol)

let num = 50
let num2 = num
num2 = 100
console.log(num) //50
console.log(num2) //100

Para contornar esse comportamento, além de utilizarmos a notação literal, objetos também podem ser criados através do método Object.create()

const objPersonagem = {
 nome: "Gandalf",
 classe: "mago",
 nivel: "20"
}

const objPersonagem2 = Object.create(objPersonagem)
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem2.nome) //Gandalf, o Cinzento


O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parametro.

Um objeto pode conter um array de objetos, o que nos permite invocar desde funções comuns até arrays como filter()

Para acessar as propriedades de um objeto dentro de um objeto podemos utilizar a notação de ponto ou a notação de colchetes

No JavaScript, objetos são classificados tambem como um array associativo (map ou dicionário)

No JS as propriedados são expressas como strings e podem ser manipuladas em tempo de execução, o que confere uma flexibilidade muito grande na hora de escrever código.

Os valores em um objeto podem ser tipos primitivos (strings, numeros, booleanos e null), arrays ou outros objetos
Alem das propriedades, tambem podem atribuir funcoes que dao comprotamento a um objeto


## Percorrendo Objetos

O método For … in permite a iteração sobre as propriedades de um objeto como em um array.


O for … in permite iterar sobre as propriedades de um objeto, e neste loop temos a flexibilidade de percorrer o objeto e executar uma série de comparações. <Uma delas é usar o typeof e verificar o tipo da propriedade>

O loop definido no for … in irá retornar para a variavel info o nome da chave do objeto, ou seja, o nome da propriedade do objeto.


Percorremos objetos a partir das chaves utilizando for…in, iterando sobre as propriedades de um objeto como em um array;
Para extrair chaves e valores de objetos é possivel utilizar métodos de Object
Funções como .entries, .key, .value podem ser uteis na hora de trabalhar com objetos
Spread Operator (ou sintaxe de espalhamento) pode ser uma opção para decompor objetos quando precisamos extrailos de um array e formar um novo array

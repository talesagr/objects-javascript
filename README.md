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

## 04. Prototype

Além do nome e do valor, cada propriedade tem também três atributos:

Writable: Define se a propriedade pode ser adicionada a (ou escrita em) um objeto;
Enumerable: Define se a propriedade é retornada, por exemplo, em um loop for…in ou utilizando Object.keys() / Object.values() / Object.entries().  Ou seja, se a propriedade é enumerável
Configurable: Específica se a propriedade pode ser modificada ou deletada. Ou seja, se é configurável

Por definição, todas as propriedades de um objeto criadas durante o desenvolvimento tem estes três atributos como true. Já a maior parte das propriedades herdadas do protótipo tem estes atributos como false e não podem ser enumeradas, adicionadas ou alteradas.

O JavaScript utiliza o termo own property (propriedade própria) para se referir às propriedades que pertencem ao objeto (como os exemplos nome, cpf, e email) e que não são herdadas do protótipo

Utilizamos o método Object.getOwnPropertyDescriptor() para descrever os atributos de uma parâmetro teremos:

value : “valor do parâmetro",
writable: true,
enumerable: true,
configurable: true

Métodos que começam com getOwnPropriety… funcionam apenas em propriedades próprias do objeto.

Objetos criados de forma literal (const obj = {a: 1}) utilizam Object.prototype como protótipo; objetos criados com new a partir de um construtor herdam a propriedade prototype de sua função construtora; Objetos criados com Object.create() recebem como prototype o primeiro parâmetro da função - que pode ser null


Através da propriedade Prototype que acessamos o protótipo de um objeto para manipulá-lo, podendo adicionar propriedades e funções. Novos objetos criados herdarão essas características e comportamentos diretos do protótipo.

Existe um protótipo associado ao uso de objetos literais no JavaScript para a herança de atributos e funções já definidos. Quase todo objeto em JavaScript tem associado a ele um segundo objeto, seu protótipo, que lhe confere uma série de atributos e funções



No JavaScript o protótipo representa um objeto “modelo” com seus métodos, utilizado como base para a criação de outros objetos
Acessamos propriedades de protótipo através de __proto__ e da propriedade prototype;
A herança de protótipo utiliza, para a criação de dados primitivos, arrays e objetos com JavaScript


## 05. Orientação a Objeto

### Atributos e Métodos

uma Classe define os atributos (características) e os métodos (comportamentos) de um objeto

Herança : É um mecanismo da OO que permite que uma classe herde características de uma outra classe extends
super


Objeto: É uma instância de uma classe

—---------------------------------------------------------------

Orientação a Objetos é um modelo (estilo) de se programar

A ideia é transformar coisas do mundo real para o código

Uma classe tem atributos e métodos

Um objeto é uma instância de classe em memória




## this : Representa o objeto que executa a função. Podemos dizer que a instrução passada para o JavaScript é : ”execute a função aqui, utilizando este contexto”.
No caso de atributos das funções construtoras ou dos construtores de classe, o this tem função similar: podemos dizer que o construtor recebe os atributos deste objeto

3 métodos para manipular o this:

call()
Permite que uma função seja chamada com parâmetros e valor de this específicos.

O parâmetro do método call() se refere ao objeto que será usado como contexto do this e, do segundo parâmetro em diante, são passados os argumentos que a função deve receber. 

apply()
Funciona de maneira semelhante ao call(), porém recebe os argumentos em um array ao invés de separados

Utilizamos o método apply() caso tenhamos um array de dados e o call() passamos valores individuais como parâmetro. Lembramos que o array precisa seguir a ordem correta dos parâmetros informados na função

bind()
“Prende” ou “liga” uma função ao contexto de um objeto


Em um paradigma de Orientação a Objetos, uma classe define um modelo base usado na criação de objetos na memória do computador
    Na orientação a objetos uma classe serve como uma planta que descreve os atributos e comportamentos comuns a objetos de um mesmo tipo

Na Construção de uma classe em JavaScript, além da palavra reservada class, devemos também definir uma função construtora (que inicializa as propriedades de objetos) quando ele for criado
    No JavaScript temos a definição de um método construtor para a inicialização das propriedades de objetos no momento da sua instanciação em memória


Classe e objetos são alguns dos principais conceitos da Programação Orientada a Objetos;

Utilizamos ma classe como modelo para construir objetos com propriedades e métodos
Para criar objetos a partir de modelos específicos herdamos de uma classe utilizando o extends 
//A)
let minhaString: string = "oi"

//ao atribuir um numero a uma variável tipo string o TS da um erro dizendo que o tipo numero 
//não é atribuível a uma string;

//B)

const meuNumero: number | string = 2

//para aceitar mais um tipo de valor fazemos a union type

//C)

const pessoa: { nome: string, idade: number, corFavorita: string} = {
    nome: "Pri",
    idade: 33,
    corFavorita: "rosa"
};

enum CoresArcoIris{
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

type Pessoa = { nome: string, idade: number, corFavorita: CoresArcoIris};

const usuarios1: Pessoa = {
    nome: "Thi",
    idade: 30,
    corFavorita: CoresArcoIris.AZUL
};

const usuarios2: Pessoa = {
    nome: "Gus",
    idade: 2,
    corFavorita: CoresArcoIris.VERDE
};

const usuarios3: Pessoa = {
    nome: "Tevez",
    idade: 3,
    corFavorita: CoresArcoIris.ANIL
};

 console.log(usuarios1, usuarios2, usuarios3)
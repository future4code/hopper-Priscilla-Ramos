Exercícios de interpretação de código
1. 
let a = 10
let b = 10

console.log(b) // imprime o número 10

b = 5
console.log(a, b) // imprime a e b (com a alteração) = números 10 e 5

2.
let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c) 
// c = 10
// b = 10
// a = 10
// imprime os números 10 10 10 

3. 
let p = prompt("Quantas horas você trabalha por dia?") // horasDeTrabalhoPorDia
let t = prompt("Quanto você recebe por dia?") // salarioPorDia
alert(`Voce recebe ${t/p} por hora`) // alert(`Voce recebe ${salarioPorDia/horasDeTrabalhoPorDia} por hora`)


Exercícios de escrita de código
 1.
const nome 
const idade

console.log (typeof nome, idade)  // undefined - apareceu esse "tipo", pois eu não inseri nenhum tipo de váriavel dentro de cada uma das variáveis declaradas.

const nome = prompt ("Qual seu nome?")
const idade = prompt ("Qual sua idade?")

console.log ("Olá", nome, "você tem", idade, "anos!" ) // esqueci das vírgulas e deu erro na hora de rodar!

2.
const oculos = "Você usa óculos? - SIM"
const cafeDaManha = "Você toma café da manhã normalmente? - NÃO"
const filhos = "Você tem filhos? - SIM"

console.log (oculos) 
console.log (cafeDaManha)
console.log (filhos) // quis cada uma em uma linha, por isso não usei as vírgulas para ficarem todas seguidas!

3.
let a = 10
let b = 25

c = a
a = b
b = c


console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10
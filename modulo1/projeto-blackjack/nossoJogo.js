/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log("Boas vindas ao jogo de Blackjack!")


// const pontuacao = (valor1, valor2) => {
//    return valor1 + valor2
// }

// const carta = comprarCarta()


// //---usuário---
// const imprimirMensagemCartasUsuário = (carta, pontuacao) =>{
//   console.log (`Usuário - cartas: ${carta} ${carta}  - pontuação ${pontuacao} `)
// }

// //---computador---

// const imprimirMensagemCartasComputador = (carta, pontuacao) =>{
//    console.log (`Usuário - cartas: ${carta} ${carta}  - pontuação ${pontuacao} `)
//  }

const confirmaNovaRodada = confirm("Quer iniciar uma nova rodada?")

if (confirmaNovaRodada === "true") {
   console.log("vamos iniciar!") //testando
} else {
console.log("O jogo acabou")
}
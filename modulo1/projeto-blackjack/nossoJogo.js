/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
//  * 
//  * 
//     const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
//     console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
//     console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 *
 * 
 */

console.log("Bem vindo(a) ao jogo de Blackjack!")

const novaRodada = confirm("Quer iniciar uma nova rodada?")

const pontuacao = (pontuacaoUsuario, pontuacaoComputador) => {
      if (pontuacaoUsuario > pontuacaoComputador) {
            console.log("Usuário ganhou!")
      } else if (pontuacaoUsuario < pontuacaoComputador) {
            console.log("Computador ganhou!")
      } else {
            console.log("Empate!")
      }
}

const jogo = (novaRodada) => {
      if (novaRodada) {

            let cartaUsuario1 = comprarCarta()
            let cartaUsuario2 = comprarCarta()

            let cartaComputador1 = comprarCarta()
            let cartaComputador2 = comprarCarta()

            let pontuacaoUsuario = (cartaUsuario1.valor + cartaUsuario2.valor)
            let pontuacaoComputador = (cartaComputador1.valor + cartaComputador2.valor)

            console.log(`Usuário - cartas: ${cartaUsuario1.texto}, ${cartaUsuario2.texto} - pontuação: ${pontuacaoUsuario}`);
            console.log(`Computador - cartas: ${cartaComputador1.texto}, ${cartaComputador2.texto} - pontuação: ${pontuacaoComputador}`)

            pontuacao(pontuacaoUsuario, pontuacaoComputador)
            
      } else {
            console.log("O jogo acabou!")
      }
}

jogo(novaRodada)

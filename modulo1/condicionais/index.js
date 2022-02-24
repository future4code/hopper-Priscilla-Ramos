// INTERPRETAÇÃO DE CÓDIGO

// 1.

// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }


//a) Explique o que o código faz. Qual o teste que ele realiza? 
//      Verifica se o numero é par, pois o resto da divisão precisa ser igual a 0.

// b) Para que tipos de números ele imprime no console "Passou no teste"? 
//      Números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"?
//      Números ímpares

//2.

// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     // break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)

// a) Para que serve o código acima?
//      O código retorna o preço das frutas

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//      "O preço da fruta, maçã é R$ 2.25."

// c) Considere que um usuário queira comprar uma `Pêra`, 
// qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do 
// `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//      O código roda até encontrar o próximo break, e da o preço do default, nesse caso.


//3.

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
//   let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)


// a) O que a primeira linha está fazendo?
//      Condicionando a váriavel número a ser maior do que 0.

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//      10 - Esse Número passou no teste. 
//      -10 - Não aparece nada, pois só temos console.log para os números que "passam no teste". 
//      Se tivesse um else e um console.log para os que são menores que 10, apareceria.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//      Sim, erro no console.log(mensagem), pois a mensagem está inserida dentro do bloco do IF e não fora.
//      funciona como se fosse um "escopo local". 

// EXERCÍCIOS DE ESCRITA DE CÓDIGO


// 1.a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.
// b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

// const idadeUsuario = Number(prompt("Qual sua idade?"))

// c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. 
// Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

// if (idadeUsuario > 18) {
//     console.log("VocÊ pode dirigir.")
// } else {
//     console.log("Você não pode dirigir")
// }

//2.Agora faça um programa que verifica que turno do dia um aluno estuda. 
// Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). 
// Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

// const matutino = "M"
// const vespertino = "V"
// const noturno = "N"
// const turno = prompt("Qual turno você estuda?")

// if (turno === "M") {
//     console.log("Bom dia!")
// } else if (turno === "V") {
//     console.log("Boa tarde!")
// } else {
//     console.log("Boa noite!")
// }

//3.
// switch (turno) {
//     case matutino:
//         console.log("Bom dia!")
//         break
//     case vespertino:
//         console.log("Boa tarde!")
//         break
//     case noturno:
//         console.log("Boa noite!")
//         break
// }


//4.Considere a situação: você vai ao cinema com um amigo ou amiga, 
// porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. 
// Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta 
// sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. 
// Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("


// const generoFilme = prompt("Qual gênero de filme vão assistir?")
// const preçoIngresso = prompt("Qual o preço do ingresso?")
// const assistirFilme = (generoFilme == "Fantasia") && (preçoIngresso < 15)

// if (assistirFilme == true) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

// ---Desafios---

//1.

// const generoFilme = prompt("Qual gênero de filme vão assistir?")
// const preçoIngresso = prompt("Qual o preço do ingresso?")
// let lanchinho = prompt("Qual lanchinho você irá comer?")
// const assistirFilme = (generoFilme == "Fantasia") && (preçoIngresso < 15)

// if (assistirFilme == true) {
//     console.log(`Bom filme! 
// Aproveite o seu ${lanchinho}!`)
// } else {
//     console.log("Escolha outro filme :(")
// }

//2.

// const nome = prompt("Qual seu nome completo?")
// const tipoDeJogo = prompt("Qual o tipo de jogo?")
// const etapaDoJogo = prompt("Qual etapa do jogo?")
// const categoria = prompt("Qual a categoria?")
// const quantidadeIngressos = Number(prompt("Qual a quantidade de ingressos?"))

// function calculaPreço (preçoReais, preçoDolares) = {
//     if (tipoDeJogo === "IN") {
//         console.log()
//     }
// }


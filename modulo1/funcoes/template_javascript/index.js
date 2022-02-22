// INTERPRETAÇÃO DE CÓDIGO

//1.

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// minhaFuncao(2)
// minhaFuncao(10)

//A- imprime 10 e imprime 50
//B- Não aparece nada, pois não foi dado o comando de impressão ao console.

//2.

// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)

/*A- O programa faz com que o texto recebido do usuário seja transformado todo em letras minúsculas e verifica 
se tem a palavra cenoura na frase, retornando true, se tiver, e false, caso não tenha.*/
//B-  i. True;  ii. true; iii. true

//EXERCÍCIOS DE ESCRITA DE CÓDIGO

// 1.  "Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante."
// a.
// function imprimirMinhasInfos () {

//      console.log ("Eu sou Priscilla, tenho 32 anos, moro em São Bernardo do Campo e sou estudante")
// }

// imprimirMinhasInfos()

//b. Eu sou [NOME], tenho [IDADE] anos, moro em [ENDEREÇO] e sou [PROFISSÃO].

// function infos (nome, idade, endereço, profissão) {


// console.log (`Eu sou ${nome}, tenho ${idade} anos, moro em ${endereço} e sou ${profissão}`)

// }

// infos ("Gustavo", 1, "Rua Engenheiros Rebouças 2111", "bebe da mamãe")

//2. 
//a.

// function somaDosNumeros (numero1, numero2) {
//     return numero1 + numero2
// }
// console.log(somaDosNumeros(2, 2))

//b.

// function retornaBoleanos (numeroUm, numeroDois) {
//     return numeroUm >= numeroDois
// }

// // console.log(retornaBoleanos(1, 2)) //false, o primeiro não é maior ou igual ao segundo
// // console.log(retornaBoleanos(3, 2)) //true, o primeiro é maior que o segundo
// console.log(retornaBoleanos(3, 3)) //true, o primeiro é igual ao segundo

//c.
// function numeroPar(umNumero) {

//     const resto = umNumero % 2 

//     return resto == 0
    
// }

// console.log(numeroPar(2)) //true
// console.log(numeroPar(3)) //false

//d.

// function tamanhoMaiusculo (string) {
 
//    const tamanho = string.length
//    const maiusculo = string.toUpperCase()

// return  `${maiusculo} 
// tamanho da mensagem: ${tamanho}` 
      
// }

// console.log (tamanhoMaiusculo("eu sou linda!"))

//3.

//SOMA
// function soma(numero1, numero2) {
//   return numero1 + numero2  
// }


// //SUBTRAÇÃO
// function subtração(numero1, numero2) {
//     return numero1 - numero2
// }

// //MULTIPLICAÇÃO
// function multiplicação(numero1, numero2) {
//     return numero1 * numero2
// }

// //DIVISÃO
// function divisão(numero1, numero2) {
//     return numero1 / numero2
// }

// const primeiroNumero = Number(prompt("Digite dois números para utilizar operações aritméticas. Insira o primeiro"))
// const segundoNumero = Number(prompt("Insira segundo número"))

// console.log (soma(primeiroNumero, segundoNumero))
// console.log (subtração(primeiroNumero, segundoNumero))
// console.log (multiplicação(primeiroNumero, segundoNumero))
// console.log (divisão(primeiroNumero, segundoNumero))


// Interpretação de código
// //1
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0]) // Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1]) // Virginia Cavendish
// console.log(filme.transmissoesHoje[2]) // Globo, 14h

// //2
// //A.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro) // Juca, 3, SRD
// console.log(gato) // Juba, 3, SRD
// console.log(tartaruga) // Jubo, 3, SRD

//B. ria uma cópia de um objeto

// 3. 

// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender")) // false
// console.log(minhaFuncao(pessoa, "altura")) // retorna undefined, pois não tem valor e nem altura dentro do objeto

/*b. A função criada é para acessar informações dentro do objeto. Quanto imprimimos, os valores são relacionados às
 informações dentro do objeto. Então o console imprimiu a informação de "backender", e retornou o resultado, 
 depois procurou a "altura", que não encontrou e retornou undefined */

 //Exercícios de escrita de código

 //1. a. a) Crie um objeto. Ele deve conter duas propriedades: nome (string) e apelidos 
//  (um array que sempre terá exatamente três apelidos). 
//  Depois, escreva uma função que recebe como entrada um objeto e imprime uma mensagem no modelo abaixo: 

// const pessoa = {
//     nome: "Amanda",
//     apelidos: ["Amandinha", "Mandinha", "Mandi"]
// }

// function fraseApelido (objPessoa) {
//     return `Eu sou ${objPessoa.nome}, mas pode me chamar de: ${objPessoa.apelidos}`
// }

// console.log (fraseApelido(pessoa))

// //b. Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, 
// // mas com uma nova lista de três apelidos. 
// // Depois, chame a função feita no item anterior passando como argumento o novo objeto

// const novoNome = {
//     ...pessoa,
// }

//   novoNome["apelidos"] = ["Amandica", "Amandona", "Amanga"]

// console.log(fraseApelido(novoNome))

//2.
// a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão. 

// const obj1 = {
//     nome: "Priscilla",
//     idade: 32,
//     profissão: "estudante"
// }

// const obj2 = {
//     nome: "Thiago",
//     idade: 30,
//     profissão: "técnico em segurança do trabalho"
// }
// // b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// function arrayDeObj (objeto1, nome, idade, profissão) {

//     const valorNome = objeto1.nome
//     const tamanhoNome = objeto1.nome.length
//     const valorIdade = objeto1.idade
//     const valorProf = objeto1.profissão
//     const caractProf = objeto1.profissão.length


//     const array = [valorNome, tamanhoNome, valorIdade, valorProf, caractProf]
      
//        return array
// }

// // 1. O valor de `nome`
// // 2. O numero de caracteres do valor `nome`
// // 3. O valor de `idade`
// // 4. O valor de `profissão`
// // 5. O numero de caracteres do valor `profissão`

// console.log (arrayDeObj(obj1))
// console.log (arrayDeObj(obj2))


//3. a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// const carrinho = []

// b) Crie três novos objetos que representem frutas de um sacolão. 
// Eles devem ter as seguintes propriedades: nome (`string`) 
// e disponibilidade (`boolean` - devem começar como `true`)

// const fruta1 = {
//     nome: "mamão",
//     disponibilidade: "true"
// }

// const fruta2 = {
//     nome: "manga",
//     disponibilidade: "true"
// }

// const fruta3 = {
//     nome: "banana",
//     disponibilidade: "true"
// }


// c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do 
// array de `carrinho`. Invoque essa função passando os três objetos criados. 


// function recebeFruta(frutas) {
//     const arrayCarrinho = carrinho.push(frutas)
//     return arrayCarrinho
// }

// recebeFruta(fruta1)
// recebeFruta(fruta2)
// recebeFruta(fruta3) 




// // d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// console.log(carrinho)

//---desafio---
//1.

// function infosUsuario (nome1, idade1, profissao1) {

//  const nome = prompt("Qual seu nome?")
//  const idade = Number(prompt("Qual sua idade?"))
//  const profissao = prompt("Qual sua profissão?")
 
//  const informacoes = {
//      nome: nome,
//      idade: idade,
//      profissão: profissao

//  }
// return informacoes
// }

// console.log(infosUsuario())

//2.

// Crie uma função que receba dois objetos que representam filmes. 
// Eles devem ter as propriedades: ano de lançamento e nome.
//  A função deve retornar uma mensagem no seguinte modelo:

//  O primeiro filme foi lançado antes do segundo? false
// O primeiro filme foi lançado no mesmo ano do segundo? true

// const canina = {
//     nome: "Patrulha Canina - O Filme",
//     ano: 2021
// }

// const bugado = {
//     nome: "Ron Bugado",
//     ano: 2021
// }

// function filmes (nome, ano) {

 
//     const comparaAno = nome.ano > nome.ano 
//     const comparaMesmoAno = nome.ano == nome.ano 

//     return `O primeiro filme foi lançado antes do segundo? ${comparaAno}
//     O primeiro filme foi lançado no mesmo ano do segundo? ${comparaMesmoAno}`
// }

// console.log(filmes(canina, bugado))

//3. Crie uma função a mais pro exercício 3 de escrita de código. 
// Essa função vai auxiliar o controle de estoque do sacolão: ela deve receber por parâmetro uma das frutas e 
// retornar esse mesmo objeto com a propriedade disponibilidade com o valor invertido. 

// function estoque(frutas) {
//     return frutas.nome, frutas.disponibilidade = "false"
   
// }

// estoque(fruta1)
// estoque(fruta2)
// estoque(fruta3)
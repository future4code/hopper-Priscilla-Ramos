////--- Exercícios de interpretação de código -----

// 1.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
//   ]
  
//   const novoArrayA = usuarios.map((item, index, array) => {
//      console.log(item, index, array)
//   })

  // a) serão impressos os nomes e apelidos, seguidos dos indices deles no array.

// 2.

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayB = usuarios.map((item, index, array) => {
//      return item.nome
//   })
  
//   console.log(novoArrayB)

 // a) será impresso o nome dos usuários do array

//3. 

// const usuarios = [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" },
//   ]
  
//   const novoArrayC = usuarios.filter((item, index, array) => {
//      return item.apelido !== "Chijo"
//   })
  
//   console.log(novoArrayC)

//a) Imprime os apelidos diferentes de "Chijo", não exibindo nem o nome deste item.


//--- Exercícios de escrita de código -----


//1.

// const pets = [
//     { nome: "Lupin", raca: "Salsicha"},
//     { nome: "Polly", raca: "Lhasa Apso"},
//     { nome: "Madame", raca: "Poodle"},
//     { nome: "Quentinho", raca: "Salsicha"},
//     { nome: "Fluffy", raca: "Poodle"},
//     { nome: "Caramelo", raca: "Vira-lata"},
//  ]

//  a) Crie um novo array que contenha apenas o nome dos doguinhos

// const nomesDoguinhos = pets.map((item, index) => {
//     return item.nome
// })

// console.log(nomesDoguinhos) 

// b) Crie um novo array apenas com os [cachorros salsicha](https://www.youtube.com/watch?v=YQ404vwjzus)

// const apenasDoguinhosSalsicha = pets.filter((item, index, arrray) => {
//     return item.raca === "Salsicha"
// })

// console.log(apenasDoguinhosSalsicha)

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles. 
// A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a `[NOME]`!"

// const doguinhosPoodle = pets.filter((item, index) => {
//     return item.raca === "Poodle"
// })

// // console.log(doguinhosPoodle)

// const mensagemDesconto = doguinhosPoodle.map((item, index) => {
//     console.log (`Você ganhou um cupom de desconto de 10% para tosar o/a ${item.nome}`)
// })

// console.log(doguinhosPoodle)

// 2. 
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
//  ]

// a) Crie um novo array que contenha apenas o nome de cada item

// const nomesProdutos = produtos.map((item, index) =>{
//     return item.nome
// })

// console.log(nomesProdutos)

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5% de desconto em todos eles

// const descontoCincoPorcento = (preço) =>{
//     console.log (preço - (preço*0,5))   
// }

// // descontoCincoPorcento(100) //testando formula

// const produtosComDesconto = produtos.map((item, index) =>{
//     return `nome:   ${item.nome}; preço: ${descontoCincoPorcento(item.preco)}`
// }) 

// console.log(produtosComDesconto)          //NÃO CONSEGUI!!!!!! DA UNDEFINED NO PREÇO

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas

// const apenasBebidas = produtos.filter((item,index) =>{
//     return item.categoria === "Bebidas"

// })

// console.log(apenasBebidas)

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

// const apenasComYpe = produtos.filter((item, indice) =>{
//     return item.nome === "Ypê"
// })

// console.log(apenasComYpe)   //NÃO CONSEGUI!!!!!! 

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". 
// Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

// NÃO CONSEGUI!!!!!!



// 1.
// let array
// console.log('a. ', array)  // a. undefined

// array = null
// console.log('b. ', array) // b. null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length) // c. 11

// let i = 0
// console.log('d. ', array[i]) // d. 3

// array[i+1] = 19
// console.log('e. ', array) // e. [3, 19...]

// const valor = array[i+6]
// console.log('f. ', valor)   // f. 9

// //2.
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) //toda maiúscula, substituindo as letras A encontradas por I
// // e iria dar o tamanho da frase escrita contando os espaços.

// // "Subi num ônibus em Marrocos" -> SUBI NUM ÔNIBUS EM MIRROCOS 27

//EXERCÍCIOS DE ESCRITA

//1.
// const nomeUsuario = prompt ("Qual seu nome?")
// const email = prompt ("Qual seu e-mail?")
// const frase = `O e-mail ${email} foi cadastrado com sucesso. Seja bem vindo(a) ${nomeUsuario}!`

// console.log (frase)

// 2.

// const comidas = ["sushi", "sashimi", "camarão", "nhoque", "nuggets"]

// // // console.log (comidas)

// const frase = `Essas são minhas comidas preferidas: 
// ${comidas[0]}
// ${comidas[1]}
// ${comidas[2]}
// ${comidas[3]}
// ${comidas[4]}`

// // console.log (frase)

// const comidaUsuario = prompt("Qual sua comida preferida?")

// console.log (frase.replaceAll(comidas[2 -1], comidaUsuario))

//3.

// let listaDeTarefas
// const tarefasDiarias = prompt ("Escreva 3 tarefas que precisam ser feitas diariamente:")
// const tarefasDiarias1 = prompt ("Escreva 3 tarefas que precisam ser feitas diariamente:")
// const tarefasDiarias2 = prompt ("Escreva 3 tarefas que precisam ser feitas diariamente:")

// listaDeTarefas = [tarefasDiarias, tarefasDiarias1, tarefasDiarias2] 

// // console.log (listaDeTarefas)

// const tarefaConcluida = Number(prompt ("qual tarefa ja realizou? 0, 1 ou 2?"))

// let deletedTarefa = listaDeTarefas.splice(tarefaConcluida, 1)

// console.log (listaDeTarefas)




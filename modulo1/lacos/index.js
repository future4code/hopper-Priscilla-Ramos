// Exercícios de interpretação de código

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//     valor += i
//   }
//   console.log(valor)

//vai rodar os números que forem menores que 5 a partir do indice 0 e então vai incrementar i em "valor", 
//   imprimindo = 10

//2. Leia o código abaixo:

//   const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//     if (numero > 18) {
//           console.log(numero)
//       }
//   }

//   a) O que vai ser impresso no console?
// Vai imprimir os números maiores que 18 do array

// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` 
// é suficiente? Se sim, o que poderia ser usado para fazer isso?
// Não seria, pois o for..of não acessa os indices dos arrays, apenas o For tem esse acesso.

// 3. Qual seria o resultado impresso no console, se o usuário digitasse o número `4` ?


// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }

// o programa roda imprimindo um assterisco a mais por linha, até a linha do número digitado. 
// Seria impresso 4 asteriscos na linha 4.

// Exercícios de escrita de código

//1. 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 

const numeroBichinhosEstimaçao = Number(prompt("Quantos bichinhos de estimação você tem?"))

// a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!"

    if (numeroBichinhosEstimaçao === "0") {
        console.log("Que pena! Você pode adotar um pet!")
    } else {
        
    }
    

    for (let i = 0; i < numeroBichinhosEstimaçao; i++) {
        const digiteNomeDeBichinhos = prompt("digite o nome dos seus pets")
        const arrayDeNomes = digiteNomeDeBichinhos.push()
    }


console.log(digiteNomeDeBichinhos)


}




    // b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles,
    // um por um, e guarde esses nomes em um array 





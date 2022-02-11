//Exercícios de Interpretação de código
// 1.
// const bool1 = true
// const bool2 = false
// const bool3 = !bool2 // True

// let resultado = bool1 && bool2 // false
// console.log("a. ", resultado)

// resultado = bool1 && bool2 && bool3 // false
// console.log("b. ", resultado) 

// resultado = !resultado && (bool1 || bool2) // true
// console.log("c. ", resultado)

// console.log("d. ", typeof resultado)

// 2.

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// falta  a conversão entre tipos. PRecisa colocar o "number" na frente do "prompt" para que o console saiba que ele deve guardar números e não palavras.

3.
// let primeiroNumero = Number (prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

// Exercícios de escrita de código

// 1.

// const idade = Number (prompt("Qual sua idade?"))
// const idadeMelhorAmigo = Number (prompt("Qual a idade do seu melhor amigo/a?"))
// const comparaIdade = idade > idadeMelhorAmigo

// console.log ( "Sua idade é maior que a do seu melhor amigo?", comparaIdade)
// console.log ("A diferença de idade é de:", idade - idadeMelhorAmigo, "anos")

// 2.

// const pedeNumeroPar = Number (prompt("Insira um número par"))
// const restoDivisao = pedeNumeroPar % 2   // Sempre que é inserido um número par, o resto da divisão é 0. Se inserir número ímpar o resultado vai ser diferente de 0, os que testei resultaram 1.

// console.log (restoDivisao)

// 3.
// const idade = Number (prompt("Qual sua idade?"))
// const idadeMeses = idade * 12
// const idadeDias = idade * 365
// const idadeHoras = idade * 8.760

// console.log ("idade em meses:", idadeMeses) 
// console.log ("idade em dias:", idadeDias)
// console.log ("idade em horas:", idadeHoras)

// 4.
// const insiraNumero = Number (prompt("Insira um número"))
// const insiraOutroNumero = Number (prompt("Insira outro número"))

// console.log (insiraNumero > insiraOutroNumero) // O primeiro numero é maior que segundo?
// console.log (insiraNumero === insiraOutroNumero) // O primeiro numero é igual ao segundo? 
// console.log (insiraNumero % insiraOutroNumero === 0) // O primeiro numero é divisível pelo segundo?
// console.log (insiraOutroNumero % insiraNumero === 0)  // O segundo numero é divisível pelo primeiro?

// Desafio

//1.
// let kelvin 
// let celsius = 80
// let  fahrenheit = 77

// let celsius2 = 30
// let celsius2 = Number (prompt("Insira uma temperatura em ºC para conversão em ºF e K"))

// // // (KELVIN) = (GRAUS_FAHRENHEIT - 77)*(5/9) + 273.15
// // // (GRAUS_FAHRENHEIT) = (GRAUS_CELSIUS)*(9/5) + 32

// let celsiusParaFahrenheit2 = celsius2 *(9/5) + 32

// let celsiusParaKelvin = ((celsiusParaFahrenheit2 - 32)*(5/9) + 273.15)

// // console.log (((fahrenheit - 32)*(5/9) + 273.15), "K") // far para kelvin

// // console.log ((celsius *(9/5) + 32), "ºF") // cel para far

// console.log (celsiusParaFahrenheit2, "ºF") // cel para far

// console.log (celsiusParaKelvin, "K")     // cel para kel

// 2.

// const quilowattHora1 = 280
// const preço = 0.05

// const valor = quilowattHora1 * preço

// const desconto = valor * 0.15

// console.log (valor - desconto)

// 3.

// libra para Kg

// console.log ("20 libras", "equivalem a", (20 / 2.205), "kg")

// console.log ("10.5 oz", "equivalem a", (10.5 / 35.274), "kg")

// console.log ("100 mi", "equivalem a", (100 * 1609), "m")

// console.log ("50 ft", "equivalem a", (50 / 3.281), "m")

// console.log ("103.56 gal", "equivalem a", (103.56 * 3.785), "l")

// console.log ("450 xic", "equivalem a", (450 / 3.52), "l")

// const xicara = Number (prompt("Quantas xícaras você quer converter?"))

// console.log (xicara, "xic equivalem a", (xicara/ 3.52), "l")

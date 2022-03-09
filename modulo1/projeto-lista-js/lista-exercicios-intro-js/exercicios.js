// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui

const altura = prompt ("Digite a altura")
const largura = prompt ("Digite a largura")

console.log (altura * largura)
      
}
// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui

  const anoAtual = Number (prompt  ("Digite o ano atual"))
  const anoNascimento = Number (prompt  ("Digite seu ano de nascimento"))
  
  console.log (anoAtual - anoNascimento)

}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui

  return peso / (altura * altura)

  }

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."

  const nome =  prompt ("Digite seu nome")
  const idade = Number (prompt ("Digite sua idade"))
  const email = prompt ("Digite seu e-mail")
  
  console.log (`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui

 const cor1 = prompt ("Digite três cores favoritas, insira a primeira")
 const cor2 = prompt ("Digite a segunda")
 const cor3 = prompt ("Digite a terceira")

 array = [cor1, cor2, cor3]

 console.log (array)

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui

  return string.toUpperCase ()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

 return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  
  const tamString1 = string1.length
  const tamString2 = string2.length

    return tamString1 === tamString2

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
    return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui

  const ultimo = array[array.length -1]
  return ultimo

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui

  let posInic = array[0]
  let posFinal = array[array.length -1] 
  array[0] = array[array.length-1]
  array[array.length-1] = posInic

  return array
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
 
    let maiuscString1 = string1.toUpperCase()
    let maiuscString2 = string2.toUpperCase()
    const igualdade = maiuscString1 === maiuscString2
 
    return igualdade
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual2 = prompt("Qual ano atual?")
  const anoNasc = prompt("Qual ano de nascimento?")
  const anoCarteiraIdent = prompt("Qual ano foi emitida sua carteira de identidade?")
  
   const idade2 = anoAtual2 - anoNasc
   const vencimento = anoAtual2 - anoCarteiraIdent // volta 5, 10, 15

  const menosVinte = (idade2 <= 20) && (vencimento >= 5) // 5 em 5 anos 
  const entreVinteECinq = (idade2 > 20 && idade2 < 50) && (vencimento >= 10) // 10 em 10 anos
  const acimaDeCinquenta = (idade2 >= 50) && (vencimento >= 15)  // 15 em 15 anos

  const renovacao = menosVinte || entreVinteECinq || acimaDeCinquenta

 console.log (renovacao)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui

//  let quatrocentos = ((ano*100) / 400) >= 0
//  let quatro = (ano / 4) >= 0  
//  let naoBissexto = ((ano / 400) < 0) && ((ano / 4) < 0) // (t && t) - se for true é bissexto 
 
//  const verificaResto = quatrocentos && quatro !== naoBissexto
//  const verificaRestoNaoBissexto = verificaResto   // se for diferente vai ser true




 return (verificaResto)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03  
function retornaArrayOrdenado(array) {
    
}
 
// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = array.filter((array)=>{
    return array % 2 === 0
  })
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let pares = array.filter((array)=>{
    return array % 2 === 0
  }).map((pares)=>{
    return pares*pares
  })
 return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
let maior = 0
  for (let i = 0; i < array.length; i++){
    if (array[i] > maior){
      maior = array[i]
    }
  }
  return maior
} 

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}
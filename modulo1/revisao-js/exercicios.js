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
  return array.sort((a, b) => { return a - b })
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  let pares = array.filter((array) => {
    return array % 2 === 0
  })
  return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  let pares = array.filter((array) => {
    return array % 2 === 0
  }).map((pares) => {
    return pares * pares
  })
  return pares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0
  for (let i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }
  return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = 0
  let menor = 0
  if (num1 > num2) {
    maior = num1
    menor = num2
    const objetoEntreDoisNumeros = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: maior % menor === 0,
      diferenca: maior - menor
    }
    return objetoEntreDoisNumeros
  } else {
    maior = num2
    menor = num1
    const objetoEntreDoisNumeros = {
      maiorNumero: maior,
      maiorDivisivelPorMenor: maior % menor === 0,
      diferenca: maior - menor
    }
    return objetoEntreDoisNumeros
  }
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
  let array = []
  let array2 = []
  for (let i = 0; i < n * 2; i++) {
    if (i % 2 === 0) {
      array = [...array2, i]
      array2 = array
    }
  }
  return array2
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC) {
    return "Escaleno"
  } else if (ladoA === ladoB && ladoA === ladoC) {
    return "Equilátero"
  } else {
    return "Isósceles"
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  array.sort((a, b) => { return a - b })
  const segundoMaior = array[array.length - 2]
  const segundoMenor = array[1]
  const novoArray = [segundoMaior, segundoMenor]
  return novoArray
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  filme.atores = [" Meryl Streep", " Anne Hathaway", " Emily Blunt", " Stanley Tucci"]
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${filme.atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  const novaPessoa = { ...pessoa }
  novaPessoa.nome = "ANÔNIMO"
  return novaPessoa
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

  const novoArray = pessoas.filter((pessoas, indice) => {
    return pessoas.nome &&
      pessoas.idade > 14 &&
      pessoas.idade < 60 &&
      pessoas.altura >= 1.5
  })
  return novoArray
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let novoArray2 = pessoas.filter((pessoas, indice) => {
    return pessoas.idade <= 14 ||
      pessoas.idade > 60 ||
      pessoas.altura < 1.5
  })
  return novoArray2
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
  
    let somaCompras
  for (let i = 0; i < contas.compras.length; i++) {
    somaCompras += contas.compras[i]
  }

  let saldoSemCompras = contas.map((contas, indice) =>{
    return contas.saldoTotal 
  })
  return contas

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  return consultas.sort((a, b) => {
    return a.nome < b.nome ? -1 : a.nome > b.nome ? 1 : 0;
  })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
//   const dataConsulta = (a,b) => {
//     return new Date(a.dataDaConsulta.split(''))
//   }
//     return consultas.sort((a,b) => {
//       return a.dataDaConsulta < b.dataDaConsulta ? -1 : a.dataDaConsulta > b.dataDaConsulta ? 1 : 0;
//   })
}
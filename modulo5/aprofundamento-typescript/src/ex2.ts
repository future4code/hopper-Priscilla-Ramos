//A) entra um number e sai number

//A e B)
function obterEstatisticas(numeros: number[]): {} {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas: { maior: number, menor: number, media: number } = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}


//C)  

const numeros2: number[] = [21, 18, 65, 44, 15, 18]

type Amostra = {
    numeros: number[],
    obterEstatisticas2: {}
}

const AmostraDados: Amostra = {
    numeros: numeros2,
    obterEstatisticas2: obterEstatisticas(numeros2)

}

console.log(AmostraDados)
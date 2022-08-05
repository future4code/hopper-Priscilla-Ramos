// 2 a) 

const soma = Number(process.argv[2]) + Number(process.argv[3])
console.log(soma)

const multiplicacao = Number(process.argv[2]) * Number(process.argv[3])
console.log(multiplicacao)

const divisao = Number(process.argv[2]) / Number(process.argv[3])
console.log(divisao)

const subtracao = Number(process.argv[2]) - Number(process.argv[3])
console.log(subtracao)


// formular melhor a lógica!

  switch (process.argv[2]) {
        case "soma":
           Number(process.argv[3]) + Number(process.argv[4])
            break;
        case "subtracao":
            Number(process.argv[3]) - Number(process.argv[4])
            break;
        case "divisao":
            Number(process.argv[3]) / Number(process.argv[4])
            break;
        case "multiplicacao":
            Number(process.argv[3]) * Number(process.argv[4])
            break;
    }

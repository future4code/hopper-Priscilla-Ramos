// 2 a) 
if (isNaN(process.argv[2])) {
    console.error(`Esperava ao menos um número`)
    process.exit(0)
} else if (isNaN(process.argv[3])) {
    console.error(`Esperava 2 argumentos, mas só tenho 1`)
    process.exit(0)
} else {
    const soma = Number(process.argv[2]) + Number(process.argv[3])
    console.log("\033[1;34m", `A soma é: ${soma}`);
    
    const multiplicacao = Number(process.argv[2]) * Number(process.argv[3])
    console.log("\033[1;36m", `A multiplicaçao é :${multiplicacao}`);

    const divisao = Number(process.argv[2]) / Number(process.argv[3])
    console.log("\033[1;32m", `A divisão é: ${divisao}`);

    const subtracao = Number(process.argv[2]) - Number(process.argv[3])
    console.log("\033[0;31m", `A subtração é: ${subtracao}`)
}

// const soma = Number(process.argv[2]) + Number(process.argv[3])
// console.log("\033[1;34m", `A soma é: ${soma}`)

// const multiplicacao = Number(process.argv[2]) * Number(process.argv[3])
// console.log("\033[1;36m", `A multiplicaçao é :${multiplicacao}`)

// const divisao = Number(process.argv[2]) / Number(process.argv[3])
// console.log("\033[1;32m",`A divisão é: ${divisao}`)

// const subtracao = Number(process.argv[2]) - Number(process.argv[3])
// console.log("\033[0;31m", `A subtração é: ${subtracao}`)


// formular melhor a lógica!

// let operacao = process.argv[2];
//   switch (operacao) {
//         case "soma":
//         return  Number(process.argv[3]) + Number(process.argv[4]);
//         case "subtracao":
//         return   Number(process.argv[3]) - Number(process.argv[4]);
//         case "divisao":
//         return   Number(process.argv[3]) / Number(process.argv[4]);
//         case "multiplicacao":
//         return  Number(process.argv[3]) * Number(process.argv[4]);
//     }

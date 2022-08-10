// 1 a) Para acessar os parâmetros passados para o node na linha de comando, acessamos o process.argv[2].

// b)
const nome = process.argv[2]
const idade = Number(process.argv[3])

if (nome === undefined) {
    console.log(`Esperava 2 parâmetros, mas não recebi nenhum`)
    process.exit(0)
} else if (isNaN(idade)) {
    console.log(`Esperava 2 parâmetros, mas só recebi um`)
    process.exit(0)
} else if (nome && idade){
    console.log("\033[1;35m", `Olá ${nome}, Você tem ${idade} anos`)
}


// c)

// console.log("\033[1;33m", `Olá ${nome}, Você tem ${idade} anos. Em sete anos você terá ${7 + idade} anos`)



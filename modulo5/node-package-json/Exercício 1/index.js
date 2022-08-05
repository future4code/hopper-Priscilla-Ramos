// 1 a) Para acessar os parâmetros passados para o node na linha de comando, acessamos o process.argv[2].

// b)
const nome = process.argv[2]
const idade = Number(process.argv[3])
console.log(`Olá ${nome}, Você tem ${idade} anos`) 


// c)
const anos = Number(process.argv[4]) 
console.log(`Olá ${nome}, Você tem ${idade} anos. Em sete anos você terá ${anos+idade}`) 



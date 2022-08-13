//1)

// let nome = "Priscilla"

// console.log (splitted)

// function imprimeNome( nome: string, data: string): void {
//     let splitted = data.split("/");
//     console.log(splitted)
//     console.log(`Olá me chamo ${nome}, nasci no dia ${splitted[0]} do mês de ${splitted[1]} do ano de ${splitted[2]}`)
// }

// imprimeNome ("Priscilla", "22/03/1989")


//2)

// function tipagem(tipo: any): void {
//     console.log(typeof tipo)
// }

// tipagem("olá,Mundo!")  //string
// tipagem(2) // number
// tipagem(false) // boolean

//3)

// enum GENERO {
// 	ACAO="ação",
// 	DRAMA="drama",
// 	COMEDIA="comédia",
// 	ROMANCE="romance",
// 	TERROR="terror"
// }



// function infosFilmes(nome: string, ano: number, genero: GENERO, pontuacao?: number): void {
//     const filme = {
//         nome: ,
//         ano: ,
//         genero: ,
//         pontuacao?: 
//     }
    
//        console.log(saida)
// }


// infosFilmes("Duna", 2021, GENERO.ACAO, 74)


//4)

// enum Setores{
//    MKT = "marketing",
//    VNDS = "vendas",
//    FINANC = "financeiro"
// }

// type Colaboradores = {
//     nome: string,
//     salário: number,
//     setor: Setores,
//     presencial: boolean
// }

// const arrayFuncionarios: Colaboradores[] = [
// 	{ nome: "Marcos", salário: 2500, setor: Setores.MKT, presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: Setores.VNDS, presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: Setores.FINANC, presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: Setores.MKT, presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: Setores.FINANC, presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: Setores.VNDS, presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: Setores.MKT, presencial: true }
// ]
//    const mktPresencial = arrayFuncionarios.filter((func)=>{        
//         return func.setor === "marketing" && 
//         func.presencial === true;
//     })
    
//     console.log(mktPresencial)

//5)

// type AdminUser = {
//     name: string,
//     email: string,
//     role: string
// }

// const arrayAdminUser: AdminUser[] = [
// 	{name: "Rogério", email: "roger@email.com", role: "user"},
// 	{name: "Ademir", email: "ademir@email.com", role: "admin"},
// 	{name: "Aline", email: "aline@email.com", role: "user"},
// 	{name: "Jéssica", email: "jessica@email.com", role: "user"},  
// 	{name: "Adilson", email: "adilson@email.com", role: "user"},  
// 	{name: "Carina", email: "carina@email.com", role: "admin"}      
// ] 

// const emailAdmin = arrayAdminUser.filter((adm)=>{
//     return adm.email && adm.role === "admin"
// }).map(adm => adm.email)

// console.log(emailAdmin)

//6)

// type Contas = {
//     cliente: string,
//     saldoTotal: number,
//     debitos: number[]
// }

// const clientes: Contas[] = [
// 	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
// ]

// function




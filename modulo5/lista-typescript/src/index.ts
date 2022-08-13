//1)

// let nome = "Priscilla"

// console.log (splitted)

function imprimeNome( nome: string, data: string): void {
    let splitted = data.split("/");
    console.log(splitted)
    console.log(`Olá me chamo ${nome}, nasci no dia ${splitted[0]} do mês de ${splitted[1]} do ano de ${splitted[2]}`)
}

imprimeNome ("Priscilla", "22/03/1989")
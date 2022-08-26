export type Account = {
    name: string,
    birth: string,
    cpf: string,
    balance: number,
    extrato: {
        valor: number,
        date: string,
        description: string
    }[]
}

export const bank: Account[] = [
    {
        name: "Paulo Pereira",
        birth: "22/04/1987",
        cpf: "016.986.123-01",
        balance: 2347.00,
        extrato: [{
            valor: 45.50,
            date: "25/08/2022",
            description: "lavagem do carro"
        },
        {
            valor: 87.90,
            date: "24/08/2022",
            description: "jantarzin com momo"
        }]
    },
    {
        name: "Andreia Sazaki",
        birth: "03/01/1973",
        cpf: "043.011.432-02",
        balance: 10450.97,
        extrato: [{
            valor: 65.50,
            date: "23/08/2022",
            description: "café da manhã"
        },
        {
            valor: 187.90,
            date: "24/08/2022",
            description: "almoço comida japonesa"
        }]
    },
    {
        name: "Bruno Ramos",
        birth: "15/07/1993",
        cpf: "243.342.432-04",
        balance: 1450.97,
        extrato: [{
            valor: 25.50,
            date: "24/08/2022",
            description: "Mczeira do almoço"
        },
        {
            valor: 3.50,
            date: "24/08/2022",
            description: "casquinha mista"
        }]
    }
]


import express, { Request, Response } from "express";
import cors from "cors";
import { bank, Account } from "./data";

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, birth, cpf } = req.body
        let birthTransform = birth.split("/");
        let age: number = 2022 - birthTransform[2]

        const newUser: any = {
            name: name,
            birth: birth,
            cpf: cpf
        }

        if (!name || !birth || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros no body!");
        }

        for (let user of bank) {
            if (user.cpf === cpf) {
                errorCode = 422
                throw new Error("Usuário ja cadastrado");

            }
        }

        if (age < 18) {
            errorCode = 418
            throw new Error("Idade mínima de 18 anos não atingida");
        }

        bank.push(newUser)

        res.status(200).send(bank)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }

})

app.get("/users/saldo", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const name = req.query.name as string
        const cpf = req.query.cpf as string
        const validateUser = bank.filter((u) => {
            return u.name.toLowerCase() === name.toLowerCase() && u.cpf === cpf
        }).map(u => u.balance)

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        res.status(200).send(`seu saldo é ${validateUser}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.get("/users/saldo/:cpf", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        let cpf = req.params.cpf as string
        const validateUser = bank.filter(u => u.cpf === cpf)
        const balanceByCpf = validateUser.map(u => u.balance)

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        res.status(200).send(`Seu saldo é de: R$ ${balanceByCpf}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


app.put("/users/saldo", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const name = req.query.name as string
        const cpf = req.query.cpf as string
        let newBalance = req.body.newBalance as number
        const date1 = new Date();
        const today = date1.toLocaleDateString()
        const validateUser: any = bank.filter(u => u.name.toLowerCase() === name.toLowerCase() && u.cpf === cpf)
        const userExtract: any[] = validateUser.map((u: { extract: any; }) => u.extract).flat(1)

        const newExtract: any = {
            value: newBalance,
            date: today,
            description: "Depósito de dinheiro"
        }

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        userExtract.push(newExtract)

        res.status(200).send(userExtract)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.put("/users/saldo/atualizado", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const name = req.query.name as string
        const cpf = req.query.cpf as string
        const date1 = new Date();
        const today: any = date1.toLocaleDateString()
        const validateUser: any = bank.filter(u => u.name === name && u.cpf === cpf)
        const userBalance: number = validateUser.map((u: { balance: number; }) => u.balance)
        const userExtract: any[] = validateUser.map((u: { extract: any; }) => u.extract).flat(1)
        let sumExtract: number = 0;
        let arrayExtract: any[] = []

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        for (let extract of userExtract) {
            if (extract.date <= today) {
                arrayExtract.push(extract.value)
            }
        }

        sumExtract = arrayExtract.reduce((a: any, b: any) => a + b)

        const total: number = userBalance - sumExtract

        res.status(200).send(`O Saldo Atual é de R$ ${total}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users/pagamento", (req: Request, res: Response) => {
    let errorCode = 400

    try {

        const name = req.query.name as string
        const cpf = req.query.cpf as string
        let { value, date, description } = req.body
        const date1 = new Date();
        const today = date1.toLocaleDateString()
        const validateUser: any = bank.filter(u => u.name.toLowerCase() === name.toLowerCase() && u.cpf === cpf)
        const userBalance: number = validateUser.map((u: { balance: number; }) => u.balance)
        const userExtract: any[] = validateUser.map((u: { extract: any; }) => u.extract).flat(1)

        let newExtract: any = {}

        if (!date) {
            newExtract = {
                value: value,
                date: today,
                description: description
            }
        } else {
            newExtract = {
                value: value,
                date: date,
                description: description
            }
        }


        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Falta de parâmetros query");
        }

        if (!value || !description) {
            errorCode = 422
            throw new Error("Falta de parâmetros no body");
        }

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        if (newExtract.date < today) {
            errorCode = 418
            throw new Error("Data de pagamento expirada");
        }

        if (userBalance > value) {
            userExtract.push(newExtract)
        } else {
            errorCode = 422
            throw new Error("Valor da conta maior que o saldo")
        }

        res.status(200).send(userExtract)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users/transferencia", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userName = req.query.userName as string
        const userCpf = req.query.userCpf as string
        const { recipientName, recipientCpf, value } = req.body
        const validateUser: any = bank.filter(u => u.name.toLowerCase() === userName.toLowerCase() && u.cpf === userCpf)
        const userBalance: number = validateUser.map((u: { balance: number; }) => u.balance - value)
        const validateRecipient: any = bank.filter(u => u.name.toLowerCase() === recipientName.toLowerCase() && u.cpf === recipientCpf)

        if (!userName || !userCpf) {
            errorCode = 422
            throw new Error("Falta de parâmetros query");
        }

        if (!recipientName || !recipientCpf || !value) {
            errorCode = 422
            throw new Error("Falta de parâmetros no body");
        }

        if (!validateUser.length) {
            errorCode = 404
            throw new Error("Usuário não validado!");
        }

        if (!validateRecipient.length) {
            errorCode = 404
            throw new Error("Usuário não encontrado para transferência!");
        }

        if (userBalance < value) {
            errorCode = 404
            throw new Error("Saldo insuficiente para a transação");
        }

        res.status(200).send(`Transferência realizada, seu novo saldo é ${userBalance}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running at 3003 port")
})


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

        if (!name || !birth || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        let birthTransform = birth.split("/");
        let age: number = 2022 - birthTransform[2]

        if (age < 18) {
            errorCode = 418
            throw new Error("Idade mínima de 18 anos não atingida");
        }

        const newUser: any = {
            name: name,
            birth: birth,
            cpf: cpf
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

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        const validateUser = bank.filter((u) => {
            return u.name.toLowerCase() === name.toLowerCase() &&
                u.cpf === cpf
        }).map(u => u.balance)


        if (!validateUser) {
            errorCode = 404
            throw new Error("Usuário não encontrado!");
        }

        res.status(200).send(`seu saldo é ${validateUser}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


app.patch("/users/saldo", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        const name = req.query.name as string
        const cpf = req.query.cpf as string
        let newBalance = req.body.newBalance as number

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        for (let user of bank) {
            if (user.name.toLowerCase() === name.toLowerCase() && user.cpf === cpf) {
                user.balance = user.balance + newBalance
            }
        }


        const newAmount = bank.filter(u => u.name === name).map(u => u.balance)

        res.status(200).send(`o novo saldo é de R$ ${newAmount}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})

app.post("/users/pagamento", (req: Request, res: Response) => {
    let errorCode = 400

    try {

        let name = req.query.name as string
        let cpf = req.query.cpf as string

        let extract: any = {
            value: req.body.value,
            date: req.body.date,
            description: req.body.description
        }

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros query!");
        }

        if (!extract.value || !extract.description) {
            errorCode = 422
            throw new Error("Ausência de parâmetros no body!");
        }

        if (!extract.date) {
            extract.date = new Date();
        }

        if (extract.date < new Date()) {
            errorCode = 400
            throw new Error("Data de pagamento expirada");
        }

        const userValidate = bank.filter((u) => {
            u.name.toLowerCase() === name.toLowerCase() && u.cpf === cpf
        })

        //ver qual o problema aqui que dá que o valor da divida e maior que o saldo

        // let valueBalance = userValidate.map(u => u.balance)  

        // if (extract.value > valueBalance) {
        //     errorCode = 422
        //     throw new Error("Valor a pagar é maior que o saldo total");
        // }

        const newExtract = userValidate.map(u => u.extract).push(extract)

        res.status(200).send(newExtract)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})




app.listen(3003, () => {
    console.log("Server is running at 3003 port")
})

function u(u: any, arg1: (any: any) => any) {
    throw new Error("Function not implemented.");
}

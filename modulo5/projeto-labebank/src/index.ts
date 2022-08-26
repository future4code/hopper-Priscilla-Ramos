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
            throw new Error("Ausência de parâmetros no body!");
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


app.get("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        let name = req.query.name as string
        let cpf = req.query.cpf as string

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros no body!");
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

app.patch("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {

        let name = req.query.name as string
        let cpf = req.query.cpf as string
        let newBalance = req.body.newBalance as number

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Ausência de parâmetros no body!");
        }

        if(!cpf){
            errorCode = 422
            throw new Error("CPF não bate com o Nome");
        }

        const validateUser: any = bank.filter((u) => {
            return u.name.toLowerCase() === name.toLowerCase() &&
                u.cpf === cpf
        }).map(u => u.balance)

        if (!validateUser) {
            errorCode = 404
            throw new Error("Usuário não encontrado!");
        }

        const newAmount: number = validateUser + newBalance

        res.status(200).send(newAmount)

     } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})






app.listen(3003, () => {
    console.log("Server is running at 3003 port")
})
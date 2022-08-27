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
            return u.name.toLowerCase() === name.toLowerCase() && u.cpf === cpf
        }).map(u => u.balance)


        // if (!validateUser) {
        //     errorCode = 404
        //     throw new Error("Usuário não validado!");
        // }

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
            // else {
            //     errorCode = 404
            //     throw new Error("User não validado");
            // }
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

        const name = req.query.name as string
        const cpf = req.query.cpf as string

        let { value, date, description } = req.body
        const date1 = new Date();
        const today = date1.toLocaleDateString()

        let newExtract: any = {
            value: value,
            date: date,
            description: description
        }

        if (!name || !cpf) {
            errorCode = 422
            throw new Error("Falta de parâmetros query");
        }

        // if (!date) {
        //     date = today
        // }

        if (date < today) {
            errorCode = 418
            throw new Error("Data de pagamento expirada");
        }

        let userBalance: any = 0
        let userExtract: any = []

        for (let user of bank) {
            if (user.name.toLowerCase() === name.toLowerCase() && user.cpf === cpf) {
                userBalance = user.balance
                userExtract = user.extract
            } 
            // else {
            //     errorCode = 404
            //     throw new Error("Usuário não validado");
            // }
        }

        if (userBalance > value) {
            userExtract.push(newExtract)
        } else {
            errorCode = 422
            throw new Error("Valor da conta maior que o saldo")
        }

        const extractRefresh = bank.filter(u => u.name === name).map(u => u.extract)

        res.status(200).send(extractRefresh)

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

        if (!userName || !userCpf) {
            errorCode = 422
            throw new Error("Falta de parâmetros query");
        }

        if (!recipientName || !recipientCpf || !value) {
            errorCode = 422
            throw new Error("Falta de parâmetros no body");
        }

       let userBalance: any = 0
    
        for (let user of bank) {
            if (user.name === userName && user.cpf === userCpf) {
                userBalance = user.balance - value
            } 
            // else {
            //     errorCode = 404
            //     throw new Error("User não validado");
            // }
        }

        res.status(200).send(`Transferência realizada, seu novo saldo é ${userBalance}`)

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


app.listen(3003, () => {
    console.log("Server is running at 3003 port")
})


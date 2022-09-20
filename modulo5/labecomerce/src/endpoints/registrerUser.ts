import { Request, Response } from "express";
import { connection } from "../database/connection";
import { User } from "../types"

export const registrerUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let { name, email, password } = req.body

        if (!name || !email || !password) {
            errorCode = 404
            throw new Error("Passe nome, email e password!");
        }

        const newUser: User = {
            id: Math.random().toString(10),
            name,
            email,
            password
        }

        const user = await connection.raw(`
        INSERT INTO labecommerce_users (id, name, email, password)
        VALUES ("${newUser.id}", "${newUser.name}", "${newUser.email}", "${newUser.password}")
        `)

        res.end("Usuário Criado!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

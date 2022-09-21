import { Request, Response } from "express";
import { connection } from "../database/connection";


export const searchAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const users: any[] = await connection.raw(`
            SELECT * from labecommerce_users 
            JOIN labecommerce_purchases ON labecommerce_users.id = labecommerce_purchases.user_id
         `);

        if (users.length < 1) {
            errorCode = 404
            throw new Error("Não existem usuários cadastrados!");
        }

        res.status(200).send(users[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

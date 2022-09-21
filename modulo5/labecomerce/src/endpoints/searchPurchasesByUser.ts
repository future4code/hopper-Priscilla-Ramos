import { Request, Response } from "express";
import { connection } from "../database/connection";


export const searchPurchasesByUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const user_id = req.params.user_id as string

        const purchases: any[] = await connection.raw(`
            SELECT * from labecommerce_purchases
            WHERE user_id = "${user_id}"
            `);

        if (purchases.length > 1) {
            errorCode = 404
            throw new Error("Não existem compras para o usuário informado!");
        }

        res.status(200).send(purchases[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

import { Request, Response } from "express";
import { connection } from "../database/connection";


export const searchAllUsers = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        const purchase: any[] = await connection.raw(`
        SELECT * from labecommerce_users 
            JOIN labecommerce_purchases ON labecommerce_users.id = labecommerce_purchases.user_id
        `);

        const purchases: any = purchase[0].map(toPurchase)

        if (purchase.length < 1) {
            errorCode = 404
            throw new Error("Não existem usuários cadastrados!");
        }

        res.status(200).send(purchases)

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};


const toPurchase = (input: any): any => {
    return {
        id: input.id,
        name: input.name,
        email: input.email,
        password: input.password,
        userId: input.user_id,
        purchase: {
            productId: input.product_id,
            quantity: input.quantity,
            total_price: input.price
        }
    }
};
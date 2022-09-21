import { Request, Response } from "express";
import { connection } from "../database/connection";
import { Purchase } from "../types"

export const registerPurchase = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            errorCode = 404
            throw new Error("Passe id do usuário, id do produto e quantidade!");
        }

        const price: any = await connection.raw(`
        SELECT price FROM labecommerce_products
        WHERE id = "${product_id}"
        `)

        const mapPrice = price[0].map((u: any) => {
            return u.price
        })
        
        const total_price = Number(mapPrice * quantity)
        
        const newPurchase: Purchase = {
            id: Math.random().toString(5),
            user_id,
            product_id,
            quantity,
            total_price: total_price
        }

        const purchase = await connection.raw(`
        INSERT INTO labecommerce_purchases (id, user_id, product_id, quantity, total_price)
        VALUES ("${newPurchase.id}", 
        "${newPurchase.user_id}", 
        "${newPurchase.product_id}", 
        ${newPurchase.quantity}, 
        ${newPurchase.total_price})
        `)

        res.end("Compra adicionada!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

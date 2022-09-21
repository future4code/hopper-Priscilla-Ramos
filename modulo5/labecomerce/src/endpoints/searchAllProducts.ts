
import { Request, Response } from "express";
import { connection } from "../database/connection";


export const searchAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {

        let order = req.query.order as string 
        let search = req.query.search as string 

        const products: any[] = await connection.raw(`
            SELECT * 
            FROM labecommerce_products
            WHERE name LIKE "%${search}%"
            ORDER BY name ${order}
            `);

        if (products.length < 1) {
            errorCode = 404
            throw new Error("Não existem produtos cadastrados!");
        }

        res.status(200).send(products[0])

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

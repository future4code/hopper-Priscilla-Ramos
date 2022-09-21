import { Request, Response } from "express";
import { connection } from "../database/connection";
import { Products } from "../types";


export const registerProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
        
        let {name, price, image_url} = req.body

        if(!name || !price || !image_url){
            errorCode = 404
            throw new Error("Passe nome, preço e url da imagem!");
        }

        const newProduct: Products = {
            id: Date.now().toString(5),
            name,
            price,
            image_url 
        }
   
        const products: any[] = await connection.raw (`
        INSERT INTO labecommerce_products (id, name, price, image_url)
        VALUES ("${newProduct.id}", "${newProduct.name}", ${newProduct.price}, "${newProduct.image_url }")
        `)

        res.end("Produto cadastrado!")

    } catch (error: any) {
        console.log(error)
        res.send(error.message || error.sqlMessage)
    }
};

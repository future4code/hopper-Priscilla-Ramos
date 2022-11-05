import { Request, Response } from "express"
import { connection } from "../data/connection"


//ver o que ta dando de errado!!
export const getUserPage = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
 
          let page = Number(req.query.page)
       let size: number = 5
       let offset = size * (page - 1)
       
       const users = await connection("aula48_exercicio")
       .where("%")
       .limit(size)
       .offset(offset)
       
       
       res.status(200).send(users)
 
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 };
 

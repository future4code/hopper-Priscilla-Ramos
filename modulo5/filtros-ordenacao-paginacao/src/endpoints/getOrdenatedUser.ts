
import { Request, Response } from "express"
import { connection } from "../data/connection"

//ver qq ta acontecendo
export const getOrdenatedUser = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
 
       let sort = req.query.sort as string
    //    let name = req.query.name as string
    //    let type = req.query.type as string
       
 
       const users = await connection("aula48_exercicio")
        .orderBy(sort || "email", "asc")
       
    
        if (!users.length) {
          res.statusCode = 404
          throw new Error("Não foram encontrados registros")
       }
 
       res.status(200).send(users)
 
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 };
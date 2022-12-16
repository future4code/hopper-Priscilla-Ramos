import { Request, Response } from "express"
import { connection } from "../data/connection"


export const getUserByType = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
 
       let type = req.params.type as string
 
       if (!type) {
          errorCode = 422
          throw new Error("Precisa passar um type nos params");
       }
 
       const userType = await connection.raw(`
       SELECT * FROM aula48_exercicio
       WHERE type = "${type}";
       `)
 
       if (!userType.length) {
          res.statusCode = 404
          throw new Error("Tipo não encontrado")
       }
 
       res.status(200).send(userType[0])
 
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 };
 
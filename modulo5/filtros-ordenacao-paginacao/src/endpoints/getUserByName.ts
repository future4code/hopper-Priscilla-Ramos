import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getUserByName = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400
    try {
 
       let name = req.query.name as string
 
       if (!name) {
          errorCode = 404
          throw new Error("Precisa passar um nome omo parâmetro");
 
       }
 
       const users = await connection("aula48_exercicio")
          .where("name", "like", `%${name}%`)
 
       if (!users.length) {
          res.statusCode = 404
          throw new Error("Nenhum usuário encontrado")
       }
 
       res.status(200).send(users)
 
    } catch (error: any) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 };
import { Request, Response } from "express"
import { connection } from "../data/connection"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
   try {
      const users = await selectAllUsers()

      if (!users.length) {
         res.statusCode = 404
         throw new Error("No recipes found")
      }

      res.status(200).send(users)

   } catch (error: any) {
      console.log(error)
      res.send(error.message || error.sqlMessage)
   }
};

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


//ver qq ta acontecendo aqui!!!!
export const getOrdenatedUser = async (req: Request, res: Response): Promise<void> => {
   let errorCode = 400
   try {

      let sort = req.query.sort as string
      // let name = req.query.name as string
      // let type = req.query.type as string

      if (!sort) {
         sort = "email"
      }

      const users = await connection.raw(`
      SELECT * FROM aula48_exercicio
      ORDER BY ${sort} ASC;
      `)
      
        
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

export default async function selectAllUsers(): Promise<any> {
   const result = await connection.raw(`
      SELECT id, name, email, type
      FROM aula48_exercicio;
   `)

   return result[0]
}
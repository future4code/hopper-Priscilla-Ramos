import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

export class UserController {

   public createUser = async (req: Request, res: Response) => {
      try {

         const { name, email, password } = req.body

         const input: any = { name, email, password }

         const userBusiness = new UserBusiness()
         await userBusiness.createUser(input)

         res.status(201).send("Success!")

      } catch (error: any) {
         res.statusCode = 400
         let message = error.sqlMessage || error.message
         res.send({ message })
      }
   };

   public insertFriendship = async (req: Request, res: Response) => {
      try {

         const { id } = req.body

         const input: any = { id }

         const userBusiness = new UserBusiness()
         await userBusiness.insertFriendship(input)

         res.status(200).send("Amizade feita com sucesso!")

      } catch (error: any) {
         res.statusCode = 400
         let message = error.sqlMessage || error.message
         res.send({ message })
      }
   };

   public getUsers = async (req: Request, res: Response) => {
      try {

         const userBusiness = new UserBusiness()
         const response = await userBusiness.getUser()
         
      } catch (error: any) {
         res.statusCode = 400
         let message = error.sqlMessage || error.message
         res.send({ message })
      }
   };
}

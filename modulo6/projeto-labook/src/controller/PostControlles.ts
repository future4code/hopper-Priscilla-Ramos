import { Request, Response } from "express"
import { PostBusiness } from "../business/PostBusiness"

export class PostController {

   public createPost = async (req: Request, res: Response) => {
      try {

         const { photo, description, type, createdAt, authorId } = req.body

         const input: any = { photo, description, type, createdAt, authorId }

         const postBusiness = new PostBusiness()
         await postBusiness.createPost(input)

         res.status(201).send("Success!")

      } catch (error: any) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
         res.send({ message })
      }
   };


   public getPost = async (req: Request, res: Response) => {
      try {

         const { id } = req.params

         const postBusiness = new PostBusiness()
         const response = await postBusiness.getPost(id)

         res.status(200).send(response)

      } catch (error: any) {
         let message = error.sqlMessage || error.message
         res.statusCode = 400
         res.send({ message })
      }
   };
}


import { PostDataBase } from "../data/PostDataBase";
import { post } from "../model/PostDTO";
import { generateId } from "../services/GenerateId";


export class PostBusiness {

    public createPost = async (input: post) => {
        let statusCode = 400
        try {

            const { photo, description, type, createdAt, authorId } = input

            if (!photo || !description || !type || !createdAt || !authorId) {
                statusCode = 404
                throw new Error("Precisa passar todos os parâmentros");
                //ver sobre curstom error            
            }

            const postId: string = generateId()

            const postDB = new PostDataBase()

            await postDB.insertPost({
                postId,
                photo,
                description,
                type,
                createdAt,
                authorId
            })


        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public getPost = async (postId: any) => {
        let statusCode = 400
        try {
            const { id } = postId

            const postDB = new PostDataBase()

            const response: any = await postDB.getPosts(id)

            if (response.length < 1) {
                statusCode = 404
                throw new Error("Post not found")
                //ver custom error!!
            }

        } catch (error: any) {
            throw new Error(error.message);
        }
    };

 }


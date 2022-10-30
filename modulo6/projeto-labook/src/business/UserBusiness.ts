import { UserDataBase } from "../data/UserDataBase"
import { user } from "../model/UserDTO"
import { generateId } from "../services/GenerateId"


export class UserBusiness {

    public createUser = async (input: user) => {
        let statusCode = 400
        try {

            const { name, email, password } = input

            if (!name || !email || !password) {
                statusCode = 406
                throw new Error('"name", "email" and "password" must be provided')
                //ver custom error!!
            }

            const id: string = generateId()

            const userDB = new UserDataBase()

            await userDB.insertUser({
                id,
                name,
                email,
                password
            })

        } catch (error: any) {
            throw new Error(error.message);
        }
    };

    public insertFriendship = async (userId: any) => {
        let statusCode = 400
        try {
            const { id } = userId

            const userDB = new UserDataBase()
            const response = await userDB.inserFriendship(id)

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
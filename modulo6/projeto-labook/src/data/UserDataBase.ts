import { user } from "../model/UserDTO";
import { generateId } from "../services/GenerateId";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {

    public insertUser = async (user: user) => {

        const newUser = await UserDataBase.connection('labook_users')
            .insert({
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            })

        return newUser
    };

    public inserFriendship = async (user: user) => {

        const newFriendship = await UserDataBase.connection('labook_users')
            .insert({
                id: user.id,
                name: user.name,
            })

        return newFriendship
    };
}
import { allUser, friend, user } from "../model/UserDTO";
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

    public insertFriendship = async (input: any) => {

        const newFriendship = await UserDataBase.connection.raw(`
            INSERT INTO 'labook_users'
            WHERE id = ${input.id}
            VALUES ("friend_id", "friend_name"),
            ("${input.friendId}", "${input.friendName}")
        `)
            // .insert({
            //     friend_id: input.friendId,
            //     friend_name: input.friendName,
            // }).where({input_id})

        return newFriendship
    };

    public userName = async (friendId: allUser) => {

        const users: any = await UserDataBase.connection('labook_users')
            .select("name").where(friendId)

             return users
    };
}
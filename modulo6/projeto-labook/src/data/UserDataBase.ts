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

    public inserFriendship = async (user: friend) => {

        const newFriendship = await UserDataBase.connection('labook_users')
            .insert({
                friend_id: user.friendId,
                friend_name: user.friendName,
            })

        return newFriendship
    };

    public getUser = async () => {

        const queryResult: any = await UserDataBase.connection('labook_users')
            .select("*")

        const users: allUser = {
            id: queryResult[0].id,
            name: queryResult[0].name,
            email: queryResult[0].email,
            password: queryResult[0].password,
            friends: {
                friendId: queryResult[0].friend_id,
                friendName: queryResult[0].friend_name
            }
        }

        return users
    };
}
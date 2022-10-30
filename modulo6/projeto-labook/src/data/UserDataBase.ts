import { friend, user } from "../model/UserDTO";
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
}
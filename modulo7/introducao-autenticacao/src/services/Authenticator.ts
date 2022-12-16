import * as jwt from 'jsonwebtoken'
import { AuthenticationData } from "../model/user";

export class Authenticator {

    public generateToken = ({ id }: AuthenticationData): string => {
        const token = jwt.sign(
            { id },
            process.env.JWT_KEY as string,
            { expiresIn: "1h" }
        )
        return token
    };

    public getTokenData = (token: string): AuthenticationData => {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        ) as AuthenticationData
        return payload
    }
}
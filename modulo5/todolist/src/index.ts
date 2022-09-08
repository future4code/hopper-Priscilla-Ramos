import express, {Express, Request, response, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import {User} from "./types"

dotenv.config();

export const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  }
});

const app: Express = express();
app.use(express.json());
app.use(cors());



app.post("/user", async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        
        const {name, nickname, email} = req.body

        const newUser: User = {
            id: Number(Date.now()), name, nickname, email
        }

        if (!name || !nickname || !email){
            throw new Error("Precisa inserir nome, nickname e email para o cadastro.");
        }

        await connection.raw (`
            INSERT INTO TodoListUser (id, name, nickname, email)
            VALUES (${newUser.id}, "${newUser.name}", "${newUser.nickname}", "${newUser.email}")
        `)

        res.status(200).send("Usuário Criado!")

    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
});

app.get ("/user/:id", async (req: Request, res: Response)=>{
    let errorCode = 400
    try {
        
        
    } catch (error: any) {
        res.status(errorCode).send(error.message)
    }
})


const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});
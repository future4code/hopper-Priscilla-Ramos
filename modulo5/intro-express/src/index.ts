import express, { Request, Response } from "express";
import cors from "cors";
// import {posts} from "./data"

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});


app.get("/", (req, res) => {
    res.send("API funcionando")
})


type User = {
    id: number,
    name: string,
    phone: number,
    email: string,
    website: string,
    posts:
    {
        id: number,
        title: string,
        body: string,
        userId: number
    }[]

}[];

const users: User = [
    {
        id: 1,
        name: "Priscilla",
        phone: 999991199,
        email: "pri@gmail.com",
        website: "www.pri.com.br",
        posts: [
            {
                id: 1.1,
                title: "olá, mundo",
                body: "e ai pessoal, tudo bem?",
                userId: 1
            },
            {
                id: 1.2,
                title: "olá olá olá",
                body: "Como vai, como vai, como vai?",
                userId: 1
            },
        ],
    },
    {
        id: 2,
        name: "Thiago",
        phone: 999221199,
        email: "thi@gmail.com",
        website: "www.thi.com.br",
        posts: [
            {
                id: 2.1,
                title: "O que acham?",
                body: "Alô, galera de cawboy!",
                userId: 2
            },
            {
                id: 2.2,
                title: "Oieeen",
                body: "Alô, galera de peão!",
                userId: 2
            },
            {
                id: 2.3,
                title: "Iailson",
                body: "Quem gosta de rodeio, bate forte com a mão!",
                userId: 2
            },
        ]
    },
    {
        id: 3,
        name: "Gustavo",
        phone: 993321199,
        email: "gus@gmail.com",
        website: "www.gus.com.br",
        posts: [{
            id: 3.1,
            title: "Oi, turupom?",
            body: "Oi, pessu! passando pra dar oi mesmo",
            userId: 3
        }]
    }
];

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
});


//coloquei os posts junto dos user para ficar mais fácil de verificar de onde vem cada post. A tipagem junto também ajudou
//a não precisar declarar 2 types


app.get("/users/posts", (req: Request, res: Response) => {
    let postagens = users.map((post)=>{
        return post.posts
    }).flat(1)
            res.send(postagens)
})



app.get("/users/:id/posts", (req: Request, res: Response) => {
    let usersId: any = req.params.id

    if (!usersId) {
        res.status(400).send("ID do usuário obrigatório")
    }

    let postagens = users.map((post)=>{
        return post.posts
    }).flat(1)

    let postUserId: any = postagens.map((user)=>{
        return user.userId
    })

    if (usersId === postUserId){
        return postagens
    }

    res.send(postagens)
})

//tá voltando um array vazio com o filter. verificar!!!
import express, { Request, Response} from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});

//1)

app.get("/ping", (req, res) => {
    res.send("Pong!")
})

//2)

type ToDo = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
};

//3)

let arrayToDo: ToDo[] = [
    {
        userId: 1,
        id: 1,
        title: "Limpar banheiro",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "Limpar sala",
        completed: true
    },
    {
        userId: 1,
        id: 3,
        title: "Lavar louça",
        completed: false
    },
    {
        userId: 2,
        id: 4,
        title: "Lavar banheiro",
        completed: true
    },
    {
        userId: 2,
        id: 5,
        title: "Lavar louça",
        completed: false
    },
    {
        userId: 3,
        id: 6,
        title: "Limpar banheiro",
        completed: true
    }
];

//4)

app.get("/todo/done", (req: Request, res: Response)=>{
    
    const arrayFilter = arrayToDo.filter((todo)=>{
        return todo.completed === true
    })
    
 res.send(arrayFilter) 
})

//5)

app.post("/todo/add", (req: Request, res: Response)=>{

    const body: ToDo = {
        userId: req.body.userId,
        id: arrayToDo.length +1,
        title: req.body.title,
        completed: req.body.completed
    }

    let novoArray: any[] = [...arrayToDo, body]
    arrayToDo = novoArray

    res.send(arrayToDo)
})

//6)

app.put("/todo/edit", (req: Request, res: Response)=>{

    const editCompleted = req.body.completed

    

})
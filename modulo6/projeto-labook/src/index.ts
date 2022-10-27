/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import { generateId } from "./services/GenerateId"
import { post } from "./model/PostDTO"

const app: Express = express()
app.use(express.json())
app.use(cors())


/**************************** CONFIG ******************************/

/**************************** TYPES ******************************/

/**************************** SERVICES ******************************/

/**************************** ENDPOINTS ******************************/

app.post('/users', )

app.post('/post', )

app.get('/posts/:id', )

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})
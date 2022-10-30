import express, { Express } from "express"
import cors from "cors"
import { userRouter } from "./routes/UserRouter"
import { postRouter } from "./routes/PostRouter"

const app: Express = express()
app.use(express.json())
app.use(cors())

// ----CreateUser----
app.use('/user', userRouter)
// ----InsertFriend----
app.use('/user', userRouter)
// ----CreatePost----
app.use('/post', postRouter)
// ----GetPost----
app.use('/post/', postRouter)


app.listen(3003, () => {
   console.log("Server running on port 3003")
})
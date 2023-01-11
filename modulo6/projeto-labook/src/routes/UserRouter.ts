import express from "express";
import { UserController } from "../controller/UserController";

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post("/create", userController.createUser)

userRouter.post("/friend/:id", userController.insertFriendship)

userRouter.get("/getAll", userController.getUsers)
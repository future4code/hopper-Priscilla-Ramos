import { app } from "./app";
import { registrerUser } from "./endpoints/registrerUser";

app.post("/users", registrerUser);
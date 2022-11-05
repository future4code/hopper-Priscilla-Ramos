import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getUserByName } from "./endpoints/getUserByName";
import { getUserByType } from "./endpoints/getUserByType";
import { getOrdenatedUser } from "./endpoints/getOrdenatedUser";
import { getUserPage } from "./endpoints/getUserPage";

app.get("/users", getAllUsers);

app.get("/users/search", getUserByName);

app.get("/users/:type", getUserByType);

app.get("/users/ordenation", getOrdenatedUser);

app.get("/users/page", getUserPage);




import { app } from "./app";
import { getAllUsers, getUserByName, getUserByType, getOrdenatedUser, getUserPage} from "./endpoints/getAllUsers";

app.get("/users", getAllUsers);

app.get("/users/search", getUserByName);

app.get("/users/:type", getUserByType);

app.get("/users/ordenation", getOrdenatedUser);

app.get("/users/page", getUserPage);




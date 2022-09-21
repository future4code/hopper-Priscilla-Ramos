import { app } from "./app";
import { registerUser } from "./endpoints/registerUser";
import { searchAllUsers } from "./endpoints/searchAllUsers";
import { registerProducts } from "./endpoints/registerProducts";
import { searchAllProducts } from "./endpoints/searchAllProducts";
import { registerPurchase } from "./endpoints/registerPurchase";
import { searchPurchasesByUser } from "./endpoints/searchPurchasesByUser"

app.post("/users", registerUser);

app.get("/users", searchAllUsers);

app.get("/users/:user_id/purchases", searchPurchasesByUser)

app.post("/products", registerProducts);

app.get("/products", searchAllProducts);

app.post("/purchases", registerPurchase);


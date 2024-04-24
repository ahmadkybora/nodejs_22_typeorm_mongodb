import express, { Express } from "express";
import router from "../src/routers";

const app: Express = express();
app.use(express.json());

app.use("/", router());

app.listen(process.env.PORT || 3001, () => {
    console.log("Server running on http://localhost:3001");
});

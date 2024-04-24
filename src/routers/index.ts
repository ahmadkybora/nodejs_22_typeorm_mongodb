import express, { Router } from "express";
import ArticleRouter from "./ArticleRouter";

const router = express.Router();

export default(): Router => {
    ArticleRouter(router);
    return router;
}

import { Router } from "express";
import ArticleController from "../controllers/ArticleController";

export default (router: Router) => {
    router.get("/article", ArticleController.index);
    router.get("/article/:slug", ArticleController.show);
    router.post("/article", ArticleController.store);
    router.patch("/article/:slug", ArticleController.update);
    router.delete("/article/:slug", ArticleController.delete);
    router.get("/article/search/:slug", ArticleController.search);
    router.get("/article/filter/:slug", ArticleController.filter);
}

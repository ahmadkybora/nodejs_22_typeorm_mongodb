import AppDataSource from "../config/database";
import Article from "../models/ArticleModel";
import { Request, Response } from "express";

class ArticleController {

    private static articleRepository = AppDataSource.getRepository(Article);
    
    public static async index(request: Request, response: Response) {
        
        const articleAll = await ArticleController.articleRepository.find();
        return response.status(200).json({
            message: "ok",
            data: articleAll,
        });
    }

    public static async store(request: Request, response: Response) {
        const { title, description } = request.body;

        const article = new Article();
        article.title = title;
        article.description = description;
        await ArticleController.articleRepository.save(article);

        const articleAll = await ArticleController.articleRepository.find();
        
        return response.status(200).json({
            message: "ok",
            data: articleAll,
        });
    }

    public static async show(request: Request, response: Response) {
        const { slug } = request.params;
        const article = await ArticleController.articleRepository.findOneBy({ title: slug });

        return response.status(200).json({
            message: "ok",
            data: article,
        });
    }

    public static async update(request: Request, response: Response) {

        const { slug } = request.params;
        const { title, description } = request.body;

        const article: any = await ArticleController.articleRepository.findOneBy({ title: slug });
        if(article !== null) {
            article.title = title;
            article.description = description;
            await ArticleController.articleRepository.save(article);

            return response.status(200).json({
                message: "ok",
                data: article,
            });
        } else {
            return response.status(404).json({
                message: "404 not found",
                data: null,
            });
        }
    }

    public static async delete(request: Request, response: Response) {

        const { slug } = request.params;

        const articleTitle: any = await ArticleController.articleRepository.findOneBy({ title: slug });

        if(articleTitle !== null) {
            await ArticleController.articleRepository.remove(articleTitle);

            const article = await ArticleController.articleRepository.find();

            return response.status(200).json({
                message: "ok",
                data: article,
            });
        } else {
            return response.status(404).json({
                message: "404 not found",
                data: null,
            });
        }
    }

    public static async search(request: Request, response: Response) {
        const { slug } = request.params;

        const search: any = await ArticleController.articleRepository.find({
            where: {
                title: slug
            }
        });

        if(search !== null) {
            return response.status(200).json({
                message: "ok",
                data: search,
            });
        } else {
            return response.status(404).json({
                message: "404 not found",
                data: null,
            });
        }
    }

    public static async filter(request: Request, response: Response) {}
}

export default ArticleController;

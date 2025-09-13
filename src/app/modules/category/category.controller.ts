import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        console.log(req.body);
        const result = await CategoryService.createCategory(req.body)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

export const CategoryController = {
    createCategory
}
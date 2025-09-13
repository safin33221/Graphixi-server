import { NextFunction, Request, Response } from "express";
import { CategoryService } from "./category.service";
import { ObjectId } from "mongoose";

const createCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await CategoryService.createCategory(req.body)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const getAllCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await CategoryService.getAllCategory()
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const deleteCategory = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id

        const result = await CategoryService.deleteCategory(id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

export const CategoryController = {
    createCategory,
    getAllCategory,
    deleteCategory
}
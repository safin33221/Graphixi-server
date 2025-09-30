import { NextFunction, Request, Response } from "express";
import { imageServices } from "./image.service";

const uploadImage = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await imageServices.uploadImage(req.body)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const GetAllImage = async (req: Request, res: Response, next: NextFunction) => {
    try {

        const result = await imageServices.GetAllImage()
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const GetImageById = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {

        const result = await imageServices.GetImageById(id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const DeleteImage = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {

        const result = await imageServices.DeleteImage(id)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}
const UpdateImage = async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    try {

        const result = await imageServices.UpdateImage(id, req.body)
        return res.status(201).json(result)
    } catch (error) {
        console.log(error);
        return res.status(500).json(error)
    }
}

export const imageController = {
    uploadImage,
    GetAllImage,
    DeleteImage,
    UpdateImage,
    GetImageById
}
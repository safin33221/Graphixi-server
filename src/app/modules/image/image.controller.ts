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

export const imageController = {
    uploadImage
}
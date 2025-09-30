import { Router } from "express";
import { imageController } from "./image.controller";

const router = Router()

router.post("/upload-image", imageController.uploadImage)

export const imageRoute = router
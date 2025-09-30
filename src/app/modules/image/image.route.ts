import { Router } from "express";
import { imageController } from "./image.controller";

const router = Router()

router.post("/upload-image", imageController.uploadImage)
router.get("/", imageController.GetAllImage)
router.get("/:id", imageController.GetImageById)
router.delete("/:id", imageController.DeleteImage)
router.patch("/:id", imageController.UpdateImage)

export const imageRoute = router
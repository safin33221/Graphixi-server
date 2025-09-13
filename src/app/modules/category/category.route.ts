import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router()
router.post("/create", CategoryController.createCategory)
router.get("/", CategoryController.getAllCategory)
router.delete("/:id", CategoryController.deleteCategory)

export const categoryRoute = router
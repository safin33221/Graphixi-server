import { ICategory } from "../../types/category.type"
import { Category } from "./category.model"

const createCategory = async (payload: ICategory) => {
    const result = await Category.insertOne(payload)
    return result
}

export const CategoryService = {
    createCategory
}
import { ObjectId } from "mongoose"
import { ICategory } from "../../types/category.type"
import { Category } from "./category.model"

const createCategory = async (payload: ICategory) => {
    const result = await Category.create(payload)
    return result
}

const getAllCategory = async () => {
    const result = await Category.find({})
    return result
}
const deleteCategory = async (id: string) => {
    const result = await Category.findByIdAndDelete(id)
    return result
}

export const CategoryService = {
    createCategory,
    getAllCategory,
    deleteCategory
}
import { IImage } from "../../types/image.type"
import { Image } from "./image.model"

const uploadImage = async (payload: Partial<IImage>) => {
    const result = await Image.create(payload)
    return result
}
const GetAllImage = async () => {
    const result = await Image.find({})
    return result
}
const GetImageById = async (id: string) => {
    const result = await Image.findOne({ _id: id })
    return result
}
const DeleteImage = async (id: string) => {
    const result = await Image.findByIdAndDelete(id)
    return result
}
const UpdateImage = async (id: string, payload: Partial<IImage>) => {
    const result = await Image.findByIdAndUpdate(id, payload)
    return result
}


export const imageServices = {
    uploadImage,
    GetAllImage,
    GetImageById,
    DeleteImage,
    UpdateImage
}
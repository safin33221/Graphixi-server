import { model, Schema } from "mongoose";
import { ICategory } from "../../types/category.type";

const categorySchema = new Schema<ICategory>({

    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    description: {
        type: String,
        default: "",
    },
    parentId: {
        type: String,
        default: null,
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
}, {
    timestamps: false,

})

export const Category = model<ICategory>("category", categorySchema)
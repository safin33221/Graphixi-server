import { model, Schema } from "mongoose";
import { IImage } from "../../types/image.type";

const imageSchema = new Schema<IImage>(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
        },
        categoryId: {
            type: Schema.Types.ObjectId,
            ref: "ImageCategory",
            required: true,
        },
        uploaderId: {
            type: Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        thumbnailUrl: {
            type: String,
        },
        tags: {
            type: [String],
            default: [],
        },
        size: {
            type: Number,
            required: true,
        },
        format: {
            type: String,
            required: true,
        },
        width: {
            type: Number,
            required: true,
        },
        height: {
            type: Number,
            required: true,
        },
        downloads: {
            type: Number,
            default: 0,
        },
        views: {
            type: Number,
            default: 0,
        },
    },
    {
        timestamps: true,
    }
);


export const Image = model("Image", imageSchema)
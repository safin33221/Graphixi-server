import { ObjectId } from "mongodb";

export interface IImage {
    id: string;            // unique identifier (UUID or ObjectId as string)
    title: string;         // image title
    description?: string;  // optional description
    categoryId: ObjectId;    // reference to category
    uploaderId: ObjectId;    // reference to user who uploaded
    url: string;           // main image URL (CDN/S3)
    thumbnailUrl?: string; // optional thumbnail
    tags?: string[];       // searchable tags
    size: number;          // file size in bytes
    format: string;        // e.g. "jpg", "png", "webp"
    width: number;         // pixel width
    height: number;        // pixel height
    downloads: number;     // number of downloads
    views: number;         // number of views
    createdAt: Date;
    updatedAt: Date;
}

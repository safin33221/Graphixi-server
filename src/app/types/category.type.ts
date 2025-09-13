export interface ICategory {
    id: string;        // unique identifier (UUID or slug)
    name: string;      // category name, e.g. "Nature"
    description?: string; // optional short description
    parentId?: string; // if sub-category (null if main)
    createdAt: Date;
    updatedAt: Date;
}

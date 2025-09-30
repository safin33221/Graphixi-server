import { Router } from "express";
import { categoryRoute } from "../modules/category/category.route";
import { imageRoute } from "../modules/image/image.route";

export const router = Router()

const moduleRoute = [
    {
        path: "/category",
        route: categoryRoute
    },
    {
        path:"/image",
        route:imageRoute 
    }
]

moduleRoute.forEach((route) => {
    router.use(route.path, route.route)
});
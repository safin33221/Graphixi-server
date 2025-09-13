import { Router } from "express";
import { categoryRoute } from "../modules/category/category.route";

const router = Router()

const moduleRoute = [
    {
        path: "/category",
        route: categoryRoute
    }
]

moduleRoute.forEach(route => {
    router.use(route.path, route.route)
});
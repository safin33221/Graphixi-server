import { Server } from "http"
import mongoose from "mongoose";
import app from "./app";




let server: Server;
const port = 3000
const startServer = async () => {
    try {
        await mongoose.connect("mongodb+srv://safin33221:0d04s9VNvxNlmL8a@cluster0.blz8y.mongodb.net/Graphixi?retryWrites=true&w=majority&appName=Cluster0")

        console.log("DB connected");
        server = app.listen(port, () => {
            console.log(`Graphixi app listening on port ${port}`)
        })
    } catch (error) {
        console.log(error);
    }
}
startServer()



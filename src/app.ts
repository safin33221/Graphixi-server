import express from 'express';
import cors from 'cors';
import { router } from './app/routes/index.route';
const app = express()

app.use(cors())
app.use(express.json())


app.use("/api/v1", router)

app.get('/', (req, res) => {
    res.send('Graphixi-server ')
})




export default app
import express from "express"
import cors from "cors"
import postRouter from "./routes/products.routes.js"
import fileUpload from "express-fileupload"

const app = express()
//middlewares
app.use(express.json())
app.use(cors())
//routes

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'./upload'
}))

app.use(postRouter)




export default app;
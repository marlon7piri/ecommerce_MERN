import express from "express"
import cors from "cors"
import postRouter from "./routes/products.routes.js"
import fileUpload from "express-fileupload"
import bodyParser from 'body-parser'


const app = express()
/* app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json()) */
//middlewares
app.use(cors())
app.use(express.json())
//routes

app.use(fileUpload({
  useTempFiles:true,
  tempFileDir:'./upload'
}))

app.use(postRouter)




export default app;
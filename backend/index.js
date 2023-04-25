import express from "express"
import {config} from "dotenv"
import { connectDb } from "./data/database.js";
import pinRoute from "./routes/pin.js"

const app = express();

app.use(express.json({extended: true}))
app.use(express.urlencoded({extended: true}))

config({
    path: "./data/config.env"
})


connectDb();

app.use("/pins", pinRoute)

app.listen(8000,()=>{
    console.log("Backend is running")
})
import express from "express"
import { connection } from "./db1.js"

const app=express()
const port=3000
connection()

const sourceRouter=require('./models/book.js')
app.use('/book',sourceRouter)

app.listen(port,()=>{
    console.log(`server is run at ${port}`)
})
 import express from 'express'
import { client } from "@repo/db/client"
 
 const app  = express()
 app.use(express.json())

 app.get('/',(req,res)=>{
    res.send("Hi There ! ")
 })

 app.post('/signup',(req,res)=>{
    const { username , password } = req.body

    client.user.create
 })

 app.listen(3000,()=>console.log("http server is running port:3000 "))
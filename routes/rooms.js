import express from "express"

const roomsRouter = express.Router();

roomsRouter.get("/",(req,res)=>{
    res.send("it's rooms ")
})

export default roomsRouter
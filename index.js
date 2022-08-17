import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router   from "./routes/auth.js";
import hotelRot from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";

const app = express();
// for environment for databse 
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to db ");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("connected",()=>{
  console.log("mongodb connected");
})

mongoose.connection.on("disconnected",()=>{
  console.log("mongodb disconnected");
})






//middleware 
app.use(cookieParser())
app.use(express.json());
app.use('/api/auth',router)
app.use('/api/hotels',hotelRot)
app.use('/api/users',usersRoute)
app.use('/api/rooms',roomsRouter)

// handel errors 
app.use((err,req,res,next)=>{

 console.log("i am handler")
  err.status = err.status ? err.status:500;
  err.message = err.message ? err.message:"something went wrong" ;


  return res.status(err.status).json({
    success: false,
    status: err.status,
    message: err.message,
    stack: err.stack,
  });
})

app.listen(8800, () => {
    connect();
  console.log("connected to backend");
});

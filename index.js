import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import router   from "./routes/auth.js";
import hotelRot from "./routes/hotels.js";
import roomsRouter from "./routes/rooms.js";
import usersRoute from "./routes/users.js";

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

app.use(express.json());

//middleware 
app.use('/auth',router)
app.use('/api/hotels',hotelRot)
app.use('./users',usersRoute)
app.use('./rooms',roomsRouter)

app.listen(8800, () => {
    connect();
  console.log("connected to backend");
});

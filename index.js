import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app = express();
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
app.get('/auth',)

app.listen(8800, () => {
    connect();
  console.log("connected to backend");
});

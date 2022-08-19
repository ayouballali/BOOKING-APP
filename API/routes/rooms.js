import express from "express"
import { createRoom } from "../controllers/room.js";
import { verifyAdmin } from "../utils/verifyAuth.js";

const roomsRouter = express.Router();

// create room 
roomsRouter.post("/:hotelId",createRoom)

export default roomsRouter ;
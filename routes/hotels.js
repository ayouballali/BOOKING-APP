import express from 'express';
import { login } from '../controllers/auth.js';
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from '../controllers/hotels.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';
import { verifyAdmin } from '../utils/verifyAuth.js';

const hotelRot = express.Router()

/***************************** API METHODS ************************** */

    // ---------- ------------CREATE--------------------- //  
hotelRot.post('/', verifyAdmin,createHotel)


// ---------- ------------UPDATE --------------------- //  
hotelRot.put('/:id',verifyAdmin,updateHotel)
// ---------- ------------DELETE--------------------- //  
hotelRot.delete("/:id",verifyAdmin,deleteHotel)
// ---------- ------------get--------------------- //  
hotelRot.get("/:id",getHotel)
// ---------- ------------getAll--------------------- //  
hotelRot.get("/",getAllHotel)



export default hotelRot;
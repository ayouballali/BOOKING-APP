import express from 'express';
import { createHotel, deleteHotel, getAllHotel, getHotel } from '../controllers/hotels.js';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const hotelRot = express.Router()

/***************************** API METHODS ************************** */

    // ---------- ------------CREATE--------------------- //  
hotelRot.post('/', createHotel)


// ---------- ------------UPDATE --------------------- //  
hotelRot.put('/:id',async (req,res)=>{
   

    

})
// ---------- ------------DELETE--------------------- //  
hotelRot.delete("/:id",deleteHotel)
// ---------- ------------get--------------------- //  
hotelRot.get("/:id",getHotel)
// ---------- ------------getAll--------------------- //  
hotelRot.get("/",getAllHotel)



export default hotelRot;
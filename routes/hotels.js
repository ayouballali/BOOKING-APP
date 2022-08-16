import express from 'express';
import Hotel from '../models/Hotel.js';
import { createError } from '../utils/error.js';

const hotelRot = express.Router()

/***************************** API METHODS ************************** */

    // ---------- ------------CREATE--------------------- //  
hotelRot.post('/',async (req,res)=>{
// to reciev the getted data 
    const newHotel = new Hotel(req.body)

    try {
        // save data 
        const savedHotel = await  newHotel.save()
        res.status(200).json(savedHotel)
    } catch (error) {
        console.log(error+"hi");
        res.status(500).json(error)
    }
})


// ---------- ------------UPDATE --------------------- //  
hotelRot.put('/:id',async (req,res)=>{
   

    try {
        // put data 
        // new attribut is for : return the new state of our table in data base 
        const savedHotel = await Hotel.findByIdAndUpdate(req.params.id,{$set: req.body},{new:true})
        res.status(200).json(savedHotel)

    } catch (error) {
        res.status(500).json(error)
        console.log("hi\n"+res+"hi \n")
    }

})
// ---------- ------------DELETE--------------------- //  
hotelRot.delete("/:id",async (req,res)=>{

    try {
        const deletedHotel = await Hotel.findByIdAndRemove(req.params.id)
        res.status(200).json("hotel successfuly deleted ")
    } catch (error) {
        res.status(500).json(error)
    }
})
// ---------- ------------get--------------------- //  
hotelRot.get("/:id",async (req,res)=>{

    try {
        const hotelFinded = await Hotel.findById(req.params.id)
        res.status(200).json(hotelFinded)
    } catch (error) {
        res.status(500).json(error)
    }
})
// ---------- ------------getAll--------------------- //  
hotelRot.get("/",async (req,res,next)=>{
   
    return next(createError(404,"error"))

    try {
        const hotelfounded = await Hotel.find()
        res.status(200).json(hotelfounded)
    } catch (error) {
        res.status(500).json(error)
    }
})



export default hotelRot;
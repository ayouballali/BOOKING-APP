import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";

export const createHotel = async (req, res, next) => {
  // to reciev the getted data
  const newHotel = new Hotel(req.body);

  try {
    // save data
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const updateHotel = async (req, res, next) => {
  try {
    // put data
    // new attribut is for : return the new state of our table in data base
    const savedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
};

export const deleteHotel = async (req, res, next) => {
    try {
        const deletedHotel = await Hotel.findByIdAndRemove(req.params.id)
        res.status(200).json("hotel successfuly deleted ")
    } catch (error) {
        next(error)
    }
  };

  export const getHotel = async (req, res, next) => {
    try {
        const hotelFinded = await Hotel.findById(req.params.id)
        res.status(200).json(hotelFinded)
    } catch (error) {
        next(error)
    }
};

export const getAllHotel = async (req, res, next) => {
    try {
        const hotelfounded = await Hotel.find()
        res.status(200).json(hotelfounded)
    } catch (error) {
        next(error)
    }
};

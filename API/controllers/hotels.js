import Hotel from "../models/Hotel.js";
import { createError } from "../utils/error.js";
import Room from "../models/Room.js";

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
    const deletedHotel = await Hotel.findByIdAndRemove(req.params.id);
    res.status(200).json("hotel successfuly deleted ");
  } catch (error) {
    next(error);
  }
};

export const getHotel = async (req, res, next) => {
  try {
    const hotelFinded = await Hotel.findById(req.params.id);
    res.status(200).json(hotelFinded);
  } catch (error) {
    next(error);
  }
};

export const getAllHotel = async (req, res, next) => {
  const { min, max, ...others } = req.query;
  try {
    const hotelfounded = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max || 1000 },
    }).limit(req.query.limit);
    res.status(200).json(hotelfounded);
  } catch (error) {
    next(error);
  }
};

export const getBycities = async (req, res, next) => {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (error) {
    next(error);
  }
};

export const getbyType = async (req, res, next) => {
  const types = req.query.types.split(",");

  try {
    const list = await Promise.all(
      types.map((type) => {
        return Hotel.countDocuments({ type: type });
      })
    );
    let lisObj = [];
    let i = 0;
    types.forEach((elm) => {
      lisObj.push({ type: elm, count: list[i++] });
    });
    res.status(200).json(lisObj);
  } catch (error) {
    next(error);
  }
};

export const getHotelRooms = async (req, res, next) => {
  try {
    const hotel = await Hotel.findById(req.params.id);
    const list = await Promise.all(
      hotel.rooms.map((room) => {
        return Room.findById(room);
      })
    );
    res.status(200).json(list)
  } catch (err) {
    next(err);
  }
};

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  var salt = bcrypt.genSaltSync(10);
  var hash = bcrypt.hashSync(req.body.password, salt);
  const newUser = new User({ ...req.body, password: hash });

  try {
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  console.log(req.body.username);
  var user = await User.findOne({ username: req.body.username });
  if (user) {
    console.log("user found")
    // check the password
    let iscorrect = await bcrypt.compare(req.body.password, user.password);

    console.log(iscorrect);

    // password false
    if (!iscorrect) return next(createError(404, "password false"));

    // you are in
    let { password, isAdmin, ...otherDetails } = user._doc;
    // create JWT
    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );
     res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(otherDetails);
  } else {
    // no user founded
    return next(createError(404, "no user with this name "));
  }
};

import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../controllers/user.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyAuth.js';

const usersRoute = express.Router();


// update
usersRoute.put("/:id", verifyUser, updateUser);

// //DELETE
usersRoute.delete("/:id", verifyUser, deleteUser);

// //GET
usersRoute.get("/:id", verifyUser, getUser);

// //GET ALL
usersRoute.get("/", verifyAdmin, getUsers);
export default usersRoute 
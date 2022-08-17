import { createError } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next,complete) => {
  const token = req.cookies.access_token;

  if (!token) return next(createError(403, "you are not authentificated"));
  // there is a token so check if is it the right one
  try {
    const decoded = jwt.verify(token, process.env.JWT);
   
    req.user = decoded;
   
    complete();
  } catch (err) {
   
     next(createError(401, "Invalid Token"));
  }
};
// the function next if there is no arguments so it complete it's path tell the end 
// else it break to the error handller in index file 

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => { 
   
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else return next(createError(401, "you are not the right user"));
  });
};


export const verifyAdmin = (req,res,next)=>{
  verifyToken(req,res,next,()=>{
    
    if(req.user.isAdmin)
        next()
    else 
      return next(createError (403,"you are not authorized "))
  })
}

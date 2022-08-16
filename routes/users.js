import express from 'express'

const usersRoute = express.Router();

usersRoute.get('/',(req,res)=>{
    res.send('this users ')
})
export default usersRoute 
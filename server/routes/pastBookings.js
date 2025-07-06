import express from "express"
import UserModel from "../models/Usermodel.js"

const router = express.Router();

router.post("/",async(req,res)=>{
    const email = req.body.email;
    const result = await UserModel.findOne({email:email});
    const data = result.pastBookings;
    res.json(data);
})

export default router;

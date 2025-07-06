import express from "express";
import cors from "cors";
import UserModel from "../models/UsernameUserModel.js";
const router = express.Router();
router.use(cors());

router.post("/", async (req, res) => {
  const data = req.body;
    console.log(data);
  const resp = await UserModel.create({
    name:data.name,
    email:data.email,
    image:data.image,
    city:data.city,
    pastBookings:[],
    wallet:250,
    profiletype:"user",
    username:data.username,
    password:data.password
  })
  res.json(resp);
});

export default router;
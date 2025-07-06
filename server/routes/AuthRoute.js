  import express from "express";
  import axios from "axios";
  import cors from "cors";
  import oauth2client from "../utils/googleConfig.js";
  import UserModel from "../models/Usermodel.js";
  import VendorModel from "../models/VendorModel.js";
  import jwt from "jsonwebtoken";
  const router = express.Router();
  express().use(cors());
  router.get("/test", (req, res) => {
    res.send("test pass");
  });

  const googleLogin = async (req, res) => {
    try {
      const { code, type} = req.query;
      const googleRes = await oauth2client.getToken(code);
      oauth2client.setCredentials(googleRes.tokens);

      const userRes = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${googleRes.tokens.access_token}`
      );
      const { email, name, picture } = userRes.data;
      let user;
      if(type==="admin"){
        user = await UserModel.findOne({ email });
        if(!user){
          return res.json("Access not granted");
        }
      }
      else if(type==="vendor"){
        user = await VendorModel.findOne({ email });
        if(!user){
          user = await VendorModel.create({
            name,
            email,
            image: picture,
            vendor_id:" ",
            city:"Delhi",
            listings:[],
            status:"waiting",
            profiletype:"vendor"
          });
        }
        
      }
      else{
        user = await UserModel.findOne({ email });
        if (!user) {
          user = await UserModel.create({
            name,
            email,
            image: picture,
            city:"Delhi",
            pastBookings: [],
            wallet: 250,
            profiletype : type,
          });
        }
      }

      const { _id } = user;
      const token = jwt.sign({ _id, email }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_TIMEOUT,
      });
      return res.status(200).json({
        message: "Success",
        token,
        user,
      });
    } catch (err) {
      res.status(500).json({
        message: `${err}`,
      });
    }
  };

  router.get("/google", googleLogin);

  export default router;

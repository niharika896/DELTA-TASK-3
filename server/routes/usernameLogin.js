import express from "express";
import cors from "cors";
import UserModel from "../models/UsernameUserModel.js";
const router = express.Router();
router.use(cors());

router.post("/", async (req, res) => {
  console.log("called");
  const { type, data } = req.body;
  console.log("consoling input",type,data);
  if(type==="user"){
    const user = await UserModel.findOne({username:data.username});
    if(user){
      console.log("user found")
      console.log(user.password,data.password,user.password===data.password.trim())
      console.log("user:",user);
        if(user.password === data.password.trim()){
          console.log("oass found");
          return res.json({message:2,user:user});
         } //existing user confirmed
        else return res.json({message:0}); //existing user incorrect password
    }
    else{
        return res.json({message:1}); //invalid user name/password / new user
    }
  }
});

export default router;
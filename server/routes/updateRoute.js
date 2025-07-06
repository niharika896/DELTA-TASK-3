import express from "express";
import UserModel from "../models/Usermodel.js";
import cors from "cors";
express().use(cors());

const updateRouter = express.Router();

updateRouter.post("/", async (req, res) => {
  try {
    await UserModel.updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
          city: req.body.city,
        },
      }
    );
    res.json({message:"updated"});
  } catch (err) {
    console.log(err);
  }
});

export default updateRouter;

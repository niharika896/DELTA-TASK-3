import express from "express";
import VendorModel from "../../models/VendorModel.js";
import cors from "cors";
express().use(cors());

const updateRouter = express.Router();

updateRouter.post("/", async (req, res) => {
  try {
    await VendorModel.updateOne(
      { email: req.body.email },
      {
        $set: {
          name: req.body.name,
          image: req.body.image,
          vendor_id:req.body.vendor_id
        },
      }
    );
    res.json({message:"updated"});
  } catch (err) {
    console.log(err);
  }
});

export default updateRouter;

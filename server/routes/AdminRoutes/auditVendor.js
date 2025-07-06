import express from "express";
import VendorModel from "../../models/VendorModel.js";
import cors from "cors";

const app = express();
app.use(cors());

const vendorRouter = express.Router();

vendorRouter.post("/", async (req, res) => {
  try {
    const id=req.body.id;
    const data = await VendorModel.find({vendor_id:id});
    res.json(data);
  } catch (err) {
    console.error("Error fetching vendors:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default vendorRouter;

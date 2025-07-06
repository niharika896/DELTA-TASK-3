import express from "express";
import VendorModel from "../../models/VendorModel.js";
import cors from "cors";

const app = express();
app.use(cors());

const vendorRouter = express.Router();

vendorRouter.post("/", async (req, res) => {
  try {
    const id=req.body.id;
    const status = req.body.status;
    const updated = await VendorModel.updateOne({_id:id},{$set:{status:status}})
    return res.send(updated);
  } catch (err) {
    console.error("Error fetching vendors:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default vendorRouter;

import express from "express";
import VendorModel from "../../models/VendorModel.js";
import cors from "cors";

const app = express();
app.use(cors());

const vendorRouter = express.Router();

vendorRouter.get("/", async (req, res) => {
  try {
    const data = await VendorModel.find({});
    res.json(data);
  } catch (err) {
    console.error("Error fetching vendors:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default vendorRouter;

import express from "express";
import PosterModel from "../models/MoviePostermodel.js";
import PosterModelEvents from "../models/EventsposterModel.js";
import cors from "cors";
const posterRouter = express.Router()
posterRouter.use(cors());
posterRouter.get('/', async (req, res) => {
  try {
    const posters1 = await PosterModel.find({});
    const posters2 = await PosterModelEvents.find({});
    res.json({ posters1, posters2 });
  } catch (err) {
    res.status(500).json({ message: "Error fetching posters", err });
  }
});

export default posterRouter;
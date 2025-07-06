import mongoose from "mongoose";
import express from "express";
import moviesConnection from "../models/dbConnectionMovieTimings.js";
const MovieRouter = express.Router();

const MovietimingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  timing: {
    type: Object,
  },
  image:{
    type:String,
  }
});

MovieRouter.get("/", (req,res)=>{
    res.send("running");
})

MovieRouter.post("/", async (req, res) => {
  const city = req.body.city;
  const MovieModel = moviesConnection.model(city, MovietimingSchema, city);

  try {
    const movies = await MovieModel.find({});
    res.json(movies);
  } catch (err) {
    console.log(err);
  }
});

export {MovietimingSchema};
export default MovieRouter;

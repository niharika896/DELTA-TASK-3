import mongoose from "mongoose";
import postersConnection from "./dbConnectionPosters.js";

const PosterSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  image:{
    type:String
  }
});

const PosterModel = postersConnection.model("Movies", PosterSchema, 'Movies');
export default PosterModel;

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

const PosterModelEvents = postersConnection.model("Events", PosterSchema, 'Events');
export default PosterModelEvents;

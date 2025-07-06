import mongoose from "mongoose";
import express from "express";
import seatsConnection from "../models/dbSeatsConnection.js";

const SeatsRouter = express.Router();

  const seatsSchema = new mongoose.Schema({
      seatno:{
          type:String,
      }
  });

SeatsRouter.get("/", (req,res)=>{
    res.send("running");
})

SeatsRouter.post("/", async (req, res) => {
  const { date, location, time } = req.body;
  const noSpaces=location.replace(/\s+/g,'');
  const name = `${date}${noSpaces}${time}`.replace(/[^a-zA-Z0-9]/g, '_');
  const seatsModel = seatsConnection.model(name, seatsSchema, name);

  try {
    const seats = await seatsModel.find({});
    res.json(seats);
  } catch (err) {
    console.log(err);
  }
});

export function getSeatsModel(name){
  if(seatsConnection.models[name]){
    return seatsConnection.models[name];
  }
  return seatsConnection.model(name,seatsSchema,name);
}
export {seatsSchema};

export default SeatsRouter;

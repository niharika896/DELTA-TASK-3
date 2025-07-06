import mongoose from "mongoose";
import express from "express";
import eventsConnection from "../models/dbConnectionEventsTimings.js"
const EventsRouter = express.Router();

const EventtimingSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  date:{
    type:Array,
  },
  time:{
    type:Array,
  },
  location:{
    type:String
  },
  image:{
    type:String
  },
  createdby:{
    type:String
  }
});

EventsRouter.get("/", (req,res)=>{
    res.send("running");
})

EventsRouter.post("/", async (req, res) => {
  const city = req.body.city;
  const EventsModel = eventsConnection.model(city, EventtimingSchema, city);

  try {
    const events = await EventsModel.find({});
    res.json(events);
  } catch (err) {
    console.log(err);
  }
});

export {EventtimingSchema} ;
export default EventsRouter;

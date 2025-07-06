import express from "express";
import UserModel from "../models/Usermodel.js";
import mongoose from "mongoose";
import seatsConnection from "../models/dbSeatsConnection.js";
import { wss } from "./webSocketServer.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const email = req.body.email;
  const booking = req.body.pastBookings;
  const result = await UserModel.updateOne(
    { email: email },
    { $pull: { pastBookings: booking } }
  );
  const date = booking.date;
  const noSpaces = booking.location.replace(/\s+/g, "");
  const time = booking.time;
  const name = `${date}${noSpaces}${time}`.replace(/[^a-zA-Z0-9]/g, "_");
  
  const seatsSchema = new mongoose.Schema({
    seatno:{
      type:String,
    }
  });

  const seatsModel = seatsConnection.model(name, seatsSchema, name);
  
  await Promise.all(
      booking.selectedSeats.map(seat =>{
        seatsModel.deleteOne({ seatno: seat });
        wss.clients.forEach(client=>{
          client.send(JSON.stringify({
          type:"seat_update",
          data:{
            seatno:seat,
            status:"cancelled",
            eventKey:name
          }
        }))
      })
    }
  )
);

res.json({ message: "success" });
});

export default router;

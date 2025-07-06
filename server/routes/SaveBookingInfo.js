import express from "express";
import cors from "cors";
import UserModel from "../models/Usermodel.js";
import { getSeatsModel } from "./SeatSelectionRoute.js";
import { wss } from "./webSocketServer.js";
const router = express.Router();
router.use(cors());
router.use(express.json());

const saveInfo = async (req, res) => {
  try {
    const { email, userData } = req.body;

    let user = await UserModel.findOne({ email });
    if(userData.length!=0){
    user.pastBookings.push(userData);
    await user.save();
    }

    // Handle dynamic seat collection logic here
    const noSpaces = userData.location.replace(/\s+/g, "");
    const name = `${userData.date}${noSpaces}${userData.time}`.replace(
      /[^a-zA-Z0-9]/g,
      "_"
    );

    const seatsModel = getSeatsModel(name);
    const seats = userData.selectedSeats.map((seat) => ({ seatno: seat }));
    await seatsModel.insertMany(seats);

    userData.selectedSeats.map((seat)=>{
      wss.clients.forEach(client=>{
        client.send(JSON.stringify({
          type:"seat_update",
          data:{
            seatno:seat,
            status:"booked",
            eventKey:name,
          }
        }))
      })
    })



    res
      .status(200)
      .json({ message: "Booking and seats saved successfully", user });
  } catch (err) {
    console.error("Error during booking process:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

router.post("/", saveInfo);
export default router;

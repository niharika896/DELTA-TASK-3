import express from "express"
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv"
dotenv.config();
import UserModel from "../models/Usermodel.js";
import MovieConnection from "../models/dbConnectionMovieTimings.js";
import EventConnection from "../models/dbConnectionEventsTimings.js";
import { MovieSchema } from "./VendorRoutes/createEvent.js";
import { EventtimingSchema } from "./EventsRoute.js";
const router = express.Router();

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

router.post("/", async(req,res)=>{
    const email = req.body.email;
    const user = await UserModel.findOne({email:email});
    const pastBookings = user.pastBookings;
    const city = user.city;
    const movieModel = MovieConnection.model(city,MovieSchema,city);
    const movies = await movieModel.find({});
    const eventModel = EventConnection.model(city,EventtimingSchema,city);
    const events =await eventModel.find({});
    const userHistory = pastBookings.map(b=>({
        name:b.eventName,
        image:b.image
    }))

    const prompt = `user has attended these events/movies: ${JSON.stringify(userHistory)} Available movies to chose from : ${JSON.stringify(movies)} and events: ${JSON.stringify(events)}. Based on preference recommend 5 movies and events from the available list. return your response in the form of an object with two objects posters1 for recommended movies and posters2 for events and each object should have recommended entries in the format {name:"",poster:"image"} extract the image urls from the input given`;
    const output = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    res.send(output);
})

export default router
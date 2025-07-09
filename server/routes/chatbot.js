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
    let movies = [];
    let events = [];
    const email = req.body.email;
    const user = await UserModel.findOne({email:email});
    const pastBookings = user.pastBookings;
    const movieCollections = await MovieConnection.db.listCollections().toArray();
    for (const col of movieCollections) {
        let movieModel = MovieConnection.model(col.name, MovieSchema, col.name);
        let movie = await movieModel.find({});
        movies.push({city: col.name, data: movie});
    }
    const eventCollections = await EventConnection.db.listCollections().toArray();
    for (const col of eventCollections) {
        let eventModel = EventConnection.model(col.name, EventtimingSchema, col.name);
        let event = await eventModel.find({});
        events.push({city: col.name, data: event});
    }
    const userHistory = pastBookings.map(b=>({
        name:b.eventName,
    }));
    const prompt = `
You are an intelligent event and movie recommendation assistant.

Context:
- User's past bookings: ${JSON.stringify(userHistory)}
- User's city: ${req.body.city}
- Available movies by city: ${JSON.stringify(movies)}
- Available events by city: ${JSON.stringify(events)}
- Conversation history: ${req.body.convo}
- User's latest message: "${req.body.convo[-1]}"

Instructions:
1. Always answer based on the user's latest message and the conversation history.
2. If the user asks for a specific date (e.g., "13th June"), recommend only events or movies happening on that date in their city, and provide showtimes if available.
3. If the user asks for showtimes, list the showtimes for the relevant movie or event in their city, based on previous context.
4. If the user specifies a genre, location, or time, filter recommendations accordingly.
5. If more information is needed, ask a concise follow-up question.
6. Respond in 2-3 lines, and be specific with your recommendations.
7. If no matching events/movies are found, politely inform the user.

Only provide information that matches the user's request. Do not repeat previous recommendations unless they are still relevant to the latest question.
`;
    const output = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });
    res.send(output);
})

export default router
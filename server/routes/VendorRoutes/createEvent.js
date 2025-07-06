import express from "express";
import MovieConnection from "../../models/dbConnectionMovieTimings.js";
import EventConnection from "../../models/dbConnectionEventsTimings.js";
import VendorModel from "../../models/VendorModel.js";
import cors from "cors";
import mongoose from "mongoose";
import { EventtimingSchema } from "../EventsRoute.js";
express().use(cors());
import multer from "multer";
import path from "path";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "posters/"); // save to 'uploads/' directory
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname); // keep original file name
  },
});
const upload = multer({ storage });
const eventRouter = express.Router();

const MovieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  timing: [
    {
      date: { type: String, required: true },
      shows: [
        {
          location: { type: String, required: true },
          time: [{ type: String, required: true }],
          _id: false,
        }
      ],
      _id: false, 
    }
  ],
  image: { type: String },
});


eventRouter.post("/", upload.single("poster"), async (req, res) => {
  try {
    const rawdata = req.body.data;
    const data = JSON.parse(rawdata);
    console.log(data,req.body.vid);
    if (data.type === "event") {
      const EventsModel = EventConnection.model(
        data.city,
        EventtimingSchema,
        data.city
      );
      try {
        const user = await EventsModel.create({
          name: data.eventName,
          date: data.eventDate,
          time: data.eventTime,
          location: data.eventLocation,
          image: req.file?.path,
          createdby: req.body.vid,
        });
        const result = await VendorModel.updateOne(
          { vendor_id: req.body.vid },
          {
            $push: {
              listings: {
                name: data.eventName,
                date: data.eventDate,
                time: data.eventTime,
                city: data.city,
                location: data.eventLocation,
                image: req.file?.path,
              },
            },
          }
        );
        return res.json({ user, result });
      } catch (err) {
        console.log(err);
      }
    } else if (data.type === "movie") {
      const MovieModel = MovieConnection.model(
        data.city,
        MovieSchema,
        data.city
      );
      const movie = await MovieModel.findOne({ name: data.movieName });
      if (movie) {
        let dateMatched = false;

        for (const timing of movie.timing) {
          if (timing.date === data.movieDate) {
            dateMatched = true;

            for (const show of timing.shows) {
              if (show.location === data.movieLocation) {
                show.time.push(data.movieTime);
                await movie.save();
              }
            }

            timing.shows.push({
              location: data.movieLocation,
              time: [data.movieTime],
            });
            await movie.save();
          }
        }

        if (!dateMatched) {
          movie.timing.push({
            date: data.movieDate,
            shows: [
              {
                location: data.movieLocation,
                time: [data.movieTime],
              },
            ],
          });
          await movie.save();
        }
      } else {  
        const result = await MovieModel.create({
          name: data.movieName,
          timing: [
            {
              date: data.movieDate,
              shows: [
                {
                  location: data.movieLocation,
                  time: [data.movieTime],
                },
              ],
            },
          ],
          image: req.file?.path,
        });

        const resultm = await VendorModel.updateOne(
          { vendor_id: req.body.vid },
          {
            $push: {
              listings: {
                name: data.movieName,
                date: data.movieDate,
                time: data.movieTime,
                city: data.city,
                location: data.movieLocation,
                image: req.file?.path,
                type:data.type
              },
            },
          }
        );
      }
    }
    res.json("successful");
  } catch (err) {
    console.log(err);
  }
});
export {MovieSchema};
export default eventRouter;

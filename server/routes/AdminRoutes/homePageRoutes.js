import MoviesConnection from "../../models/dbConnectionMovieTimings.js"
import EventsConnection from "../../models/dbConnectionEventsTimings.js"
import seatsConnection from "../../models/dbSeatsConnection.js"
import express from "express"
import { MovieSchema } from "../VendorRoutes/createEvent.js";
import { EventtimingSchema } from "../EventsRoute.js";
import { seatsSchema } from "../SeatSelectionRoute.js";

const router = express.Router();

router.get("/", async (req, res) => {
  let movies = [];
  let lengthArr = [];

  let events = [];
  let lengthArrEvents = [];

  const moviefilteringFunction = async (city) => {
    for (const movie of city) {
      for (const t of movie.timing) {
        for (const show of t.shows) {
          for (const e of show.time) {
            const noSpaces = show.location.replace(/\s+/g, '');
            const name = `${t.date}${noSpaces}${e}`.replace(/[^a-zA-Z0-9]/g, '_');
            const seatsModel = seatsConnection.model(name, seatsSchema, name);
            const length = await seatsModel.countDocuments({});

            if (movies.length < 5) {
              movies.push({
                movie: { name: movie.name, date: t.date, location: show.location, time: e },
                length
              });
              lengthArr.push(length);
            } else {
              lengthArr.sort((a, b) => a - b);
              if (length > lengthArr[0]) {
                const index = movies.findIndex(m => m.length === lengthArr[0]);
                if (index !== -1) {
                  movies.splice(index, 1);
                  movies.push({
                    movie: { name: movie.name, date: t.date, location: show.location, time: e },
                    length
                  });
                  lengthArr.splice(0, 1);
                  lengthArr.push(length);
                }
              }
            }
          }
        }
      }
    }
  };

  const eventFilterFunction = async (city) => {
    for (const e of city) {
      const noSpaces = e.location.replace(/\s+/g, '');
      const name = `${e.date[0]}${noSpaces}${e.time[0]}`.replace(/[^a-zA-Z0-9]/g, '_');
      const seatsModel = seatsConnection.model(name, seatsSchema, name);

      let length = 0;
      try {
        length = await seatsModel.countDocuments({});
      } catch (err) {
        console.error(`Error counting documents for ${name}:`, err.message);
        continue;
      }

      if (events.length < 5) {
        events.push({ event: { name: e.name, date: e.date, location: e.location, time: e.time }, length });
        lengthArrEvents.push(length);
      } else {
        lengthArrEvents.sort((a, b) => a - b);
        if (length > lengthArrEvents[0]) {
          const index = events.findIndex(ev => ev.length === lengthArrEvents[0]);
          if (index !== -1) {
            events.splice(index, 1);
            events.push({ event: { name: e.name, date: e.date, location: e.location, time: e.time }, length });
            lengthArrEvents.splice(0, 1);
            lengthArrEvents.push(length);
          }
        }
      }
    }
  };

  try {
    const movieCities = ["Bombay", "Chennai", "Delhi"];
    for (const city of movieCities) {
      const model = MoviesConnection.model(city, MovieSchema, city);
      const cityData = await model.find({});
      await moviefilteringFunction(cityData);
    }

    const eventCities = ["Bombay", "Chennai", "Delhi"];
    for (const city of eventCities) {
      const model = EventsConnection.model(city, EventtimingSchema, city);
      const cityData = await model.find({});
      await eventFilterFunction(cityData);
    }

    res.send([movies, events]);
  } catch (err) {
    console.error("Failed to fetch and process data:", err.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
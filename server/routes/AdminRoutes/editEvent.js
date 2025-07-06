import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import MovieConnection from "../../models/dbConnectionMovieTimings.js";
import EventsConnection from "../../models/dbConnectionEventsTimings.js";
import { MovieSchema } from "../VendorRoutes/createEvent.js";
import { EventtimingSchema } from "../EventsRoute.js";
import VendorModel from "../../models/VendorModel.js";
import seatsConnection from "../../models/dbSeatsConnection.js";
const router = express.Router();

router.post("/", async (req, res) => {
  const oldData = req.body.oldData;
  const data = req.body.data;
  const type = req.body.type;
  let id = req.body.id;
  id = id.trim();
  console.log(id);

  if (type === "movie") {
    const movieModel = MovieConnection.model(data.city, MovieSchema, data.city);

    if (
      oldData.name === data.name &&
      oldData.date === data.date &&
      oldData.location === data.location &&
      oldData.time === data.time
    ) {
      return res.status(200).json({ message: "No changes detected" });
    }

    // Remove old time
    await movieModel.updateOne(
      { name: oldData.name },
      {
        $pull: {
          "timing.$[dateElem].shows.$[showElem].time": oldData.time,
        },
      },
      {
        arrayFilters: [
          { "dateElem.date": oldData.date },
          { "showElem.location": oldData.location },
        ],
      }
    );

    

    // CASE 1: Same date & location – just add new time
    if (oldData.location === data.location && oldData.date === data.date) {
      await movieModel.updateOne(
        { name: data.name },
        {
          $addToSet: {
            "timing.$[dateElem].shows.$[showElem].time": data.time,
          },
        },
        {
          arrayFilters: [
            { "dateElem.date": data.date },
            { "showElem.location": data.location },
          ],
        }
      );
    }

    // CASE 2: Same date, different location
    else if (oldData.date === data.date && oldData.location !== data.location) {
      const movie = await movieModel.findOne({ name: oldData.name });
      const timingEntry = movie.timing.find((t) => t.date === data.date);

      if (timingEntry) {
        const show = timingEntry.shows.find(
          (s) => s.location === data.location
        );

        if (show) {
          if (!show.time.includes(data.time)) {
            await movieModel.updateOne(
              { name: oldData.name },
              {
                $addToSet: {
                  "timing.$[dateElem].shows.$[showElem].time": data.time,
                },
              },
              {
                arrayFilters: [
                  { "dateElem.date": data.date },
                  { "showElem.location": data.location },
                ],
              }
            );
          }
        } else {
          await movieModel.updateOne(
            { name: oldData.name, "timing.date": data.date },
            {
              $push: {
                "timing.$.shows": {
                  location: data.location,
                  time: [data.time],
                },
              },
            }
          );
        }
      } else {
        await movieModel.updateOne(
          { name: oldData.name },
          {
            $push: {
              timing: {
                date: data.date,
                shows: [{ location: data.location, time: [data.time] }],
              },
            },
          }
        );
      }
    }

    // CASE 3: Different date (location may or may not be same)
    else if (oldData.date !== data.date) {
      const movie = await movieModel.findOne({ name: oldData.name });
      const timingEntry = movie.timing.find((t) => t.date === data.date);

      if (timingEntry) {
        const show = timingEntry.shows.find(
          (s) => s.location === data.location
        );

        if (show) {
          if (!show.time.includes(data.time)) {
            await movieModel.updateOne(
              { name: oldData.name },
              {
                $addToSet: {
                  "timing.$[dateElem].shows.$[showElem].time": data.time,
                },
              },
              {
                arrayFilters: [
                  { "dateElem.date": data.date },
                  { "showElem.location": data.location },
                ],
              }
            );
          }
        } else {
          await movieModel.updateOne(
            { name: oldData.name, "timing.date": data.date },
            {
              $push: {
                "timing.$.shows": {
                  location: data.location,
                  time: [data.time],
                },
              },
            }
          );
        }
      } else {
        await movieModel.updateOne(
          { name: oldData.name },
          {
            $push: {
              timing: {
                date: data.date,
                shows: [{ location: data.location, time: [data.time] }],
              },
            },
          }
        );
      }
    }


    // Update name if changed
    if (oldData.name !== data.name) {
      await movieModel.updateOne(
        { name: oldData.name },
        {
          $set: {
            name: data.name,
          },
        }
      );
    }
  } else {
    const eventModel = EventsConnection.model(
      data.city,
      EventtimingSchema,
      data.city
    );
    const updated = await eventModel.updateOne(
      { createdby: id, name: oldData.name },
      {
        $set: {
          name: data.name,
          date: [data.date],
          time: [data.time],
          location: data.location,
        },
      }
    );
    console.log(updated);
  }

  const vendor = await VendorModel.findOne({ vendor_id: id });
  console.log("Vendor listings:", vendor.listings);

  const updated = await VendorModel.updateOne(
    {
      vendor_id: id,
      "listings.name": oldData.name,
    },
    {
      $set: {
        "listings.$.date": data.date,
        "listings.$.time": data.time,
        "listings.$.location": data.location,
        "listings.$.name": data.name,
      },
    }
  );
  console.log(updated);

  const noSpacesold = oldData.location.replace(/\s+/g, "");
  const oldname = `${oldData.date}${noSpacesold}${oldData.time}`.replace(
    /[^a-zA-Z0-9]/g,
    "_"
  );
  const noSpacesnew = data.location.replace(/\s+/g, "");
  const newname = `${data.date}${noSpacesnew}${data.time}`.replace(
    /[^a-zA-Z0-9]/g,
    "_"
  );
  if (newname !== oldname) {
    const collectionExists = await seatsConnection.db
      .listCollections({ name: oldname })
      .hasNext();

    if (collectionExists) {
      await seatsConnection.db.collection(oldname).rename(newname);
    }
  }

  return res.json("successful");
});

export default router;

import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const cityLocationsMovie = {
  Chennai: [
    "PVR Skywalk, Aminjikarai",
    "INOX, Chennai Citi Centre",
    "Escape Cinemas, Express Avenue",
    "PVR, VR Chennai",
    "INOX, Marina Mall",
    "AGS Cinemas, T. Nagar",
    "AGS Cinemas, Villivakkam",
  ],
  Bombay: [
    "PVR Phoenix Mills, Lower Parel",
    "INOX Metro, Marine Lines",
    "PVR Oberoi Mall, Goregaon",
    "Carnival Cinemas, Wadala",
    "PVR Icon, Infiniti Mall",
    "INOX CR2, Nariman Point",
    "Cinepolis, Viviana Mall",
    "Carnival Cinemas, Kurla",
    "PVR Juhu",
    "INOX, Ghatkopar",
    "PVR Growel’s 101 Mall, Kandivali",
    "INOX, R-City Mall",
    "INOX, Malad",
  ],
  Delhi: [
    "PVR Select Citywalk, Saket",
    "INOX Nehru Place",
    "PVR Pacific Mall, Tagore Garden",
    "DT Cinemas, DLF Promenade",
    "PVR Vasant Kunj",
    "Carnival Cinemas, Janakpuri",
    "PVR Promenade, Vasant Kunj",
    "M2K Cinemas, Rohini",
    "Satyam Cineplex, Patel Nagar",
    "PVR Anupam, Saket",
    "INOX, Janpath",
    "Wave Cinemas, Raja Garden",
    "Miraj Cinemas, Ashok Vihar",
    "PVR ECX, Chanakyapuri",
    "Ambience Mall, Vasant Kunj",
    "PVR Plaza, Connaught Place",
  ],
};

const cityLocationsEvents = {
  Chennai: [
    "Sir Mutha Venkatasubba Rao Concert Hall, Chennai",
    "Music Academy, TTK Road",
    "Medai - The Stage, Alwarpet",
    "Alliance Française of Madras, Nungambakkam",
  ],
  Bombay: [
    "Royal Opera House, Bombay",
    "The Habitat, Khar",
    "Canvas Laugh Club, Lower Parel",
    "G5A Foundation for Contemporary Culture, Mahalaxmi",
  ],
  Delhi: [
    "Kamani Auditorium, Delhi",
    "India Habitat Centre, Lodhi Road",
    "Akshara Theatre, Baba Kharak Singh Marg",
    "The Piano Man Jazz Club, Safdarjung",
  ],
};

const CreateEvent = () => {
  const { id, name, date, city, location, time, type } = useParams();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      city: city,
      type: type,
      name: name,
      date: date,
      time: time,
      location: location,
    },
  });
  const selectedType = watch("type");
  const selectedCity = watch("city");
  const oldData={name:name,date:date,time:time,location:location};
  const onSubmit = async (data) => {
    console.log(data);
    const result = await fetch("http://localhost:4000/admin/edit-event", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data, type, id,oldData }),
    });

    if (result.ok) {
      alert("successfully edited");
      navigate(`/vendors/audit/${id}`);
    }
  };

  return (
    <div className="h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4 mt-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Edit Entry</h2>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <select
            {...register("city", { required: "City is required" })}
            disabled
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select City</option>
            {Object.keys(cityLocationsMovie).map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
          {errors.city && (
            <span className="text-red-500 text-sm">{errors.city.message}</span>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Type</label>
          <select
            {...register("type", { required: "Type is required" })}
            disabled
            className="w-full border rounded px-3 py-2"
          >
            <option value="">Select Type</option>
            <option value="movie">Movie</option>
            <option value="event">Event</option>
          </select>
          {errors.type && (
            <span className="text-red-500 text-sm">{errors.type.message}</span>
          )}
        </div>

        {selectedType === "movie" && (
          <>
            <div>
              <label className="block mb-1 font-medium">Movie Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Movie name is required",
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.date && (
                <span className="text-red-500 text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                {...register("time", { required: "Time is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <select
                {...register("location", {
                  required: "Location is required",
                })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Location</option>
                {selectedCity &&
                  cityLocationsMovie[selectedCity]?.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
              {errors.location && (
                <span className="text-red-500 text-sm">
                  {errors.location.message}
                </span>
              )}
            </div>
          </>
        )}

        {selectedType === "event" && (
          <>
            <div>
              <label className="block mb-1 font-medium">Event Name</label>
              <input
                type="text"
                {...register("name", {
                  required: "Event name is required",
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.name && (
                <span className="text-red-500 text-sm">
                  {errors.name.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                {...register("date", { required: "Date is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.date && (
                <span className="text-red-500 text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                {...register("time", { required: "Time is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <select
                {...register("location", {
                  required: "Location is required",
                })}
                className="w-full border rounded px-3 py-2"
              >
                <option value="">Select Location</option>
                {selectedCity &&
                  cityLocationsEvents[selectedCity]?.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
              </select>
              {errors.location && (
                <span className="text-red-500 text-sm">
                  {errors.location.message}
                </span>
              )}
            </div>
          </>
        )}

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateEvent;

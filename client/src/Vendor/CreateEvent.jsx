import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  const vid = useSelector(state => state.vendorId.value);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const selectedType = watch("type");
  const selectedCity = watch("city");

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();

    formData.append("poster",data.poster[0]);

    formData.append("type", selectedType);
    formData.append("vid", vid);
    formData.append("data", JSON.stringify(data));
    console.log(formData);  
    const res = await fetch("http://localhost:4000/vendor/create-event", {
      method: "POST",
      body: formData,
    });


    if (res.ok) {
      alert("successfully created");
      navigate("/");
    }
  };

  useEffect(() => {
    console.log("vid",vid);
  }, []);

  return (
    <div className="h-screen">
      <Navbar />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-xl mx-auto bg-white shadow-md rounded-lg p-6 space-y-4 mt-6"
      >
        <h2 className="text-2xl font-semibold mb-4">Create New Entry</h2>

        <div>
          <label className="block mb-1 font-medium">City</label>
          <select
            {...register("city", { required: "City is required" })}
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
                {...register("movieName", {
                  required: "Movie name is required",
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.movieName && (
                <span className="text-red-500 text-sm">
                  {errors.movieName.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                {...register("movieDate", { required: "Date is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.movieDate && (
                <span className="text-red-500 text-sm">
                  {errors.movieDate.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                {...register("movieTime", { required: "Time is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.movieTime && (
                <span className="text-red-500 text-sm">
                  {errors.movieTime.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <select
                {...register("movieLocation", {
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
              {errors.movieLocation && (
                <span className="text-red-500 text-sm">
                  {errors.movieLocation.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Upload Poster</label>
              <input
                type="file"
                accept="image/*"
                {...register("poster", { required: "Poster is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.poster && (
                <span className="text-red-500 text-sm">
                  {errors.poster.message}
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
                {...register("eventName", {
                  required: "Event name is required",
                })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.eventName && (
                <span className="text-red-500 text-sm">
                  {errors.eventName.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Date</label>
              <input
                type="date"
                {...register("eventDate", { required: "Date is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.eventDate && (
                <span className="text-red-500 text-sm">
                  {errors.eventDate.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Time</label>
              <input
                type="time"
                {...register("eventTime", { required: "Time is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.eventTime && (
                <span className="text-red-500 text-sm">
                  {errors.eventTime.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Location</label>
              <select
                {...register("eventLocation", {
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
              {errors.eventLocation && (
                <span className="text-red-500 text-sm">
                  {errors.eventLocation.message}
                </span>
              )}
            </div>
            <div>
              <label className="block mb-1 font-medium">Upload Image</label>
              <input
                type="file"
                accept="image/*"
                {...register("poster", { required: "Image is required" })}
                className="w-full border rounded px-3 py-2"
              />
              {errors.poster && (
                <span className="text-red-500 text-sm">
                  {errors.eventPoster.message}
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

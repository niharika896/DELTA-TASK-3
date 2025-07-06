import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Events = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [dateArr, setdateArr] = useState([]);
  let city = useSelector((state) => state.City?.value);
  const [currentDate, setdate] = useState(null);

  function handleClick(currentDate, location, time,eventName) {
    navigate("/events/seatselection", {
      state: { date: currentDate, location: location, time: time, city: city,eventName:eventName },
    });
  }

  useEffect(() => {
    if (city) {
      fetch("http://localhost:4000/events", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ city }),
      })
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
          const allDates = new Set();
          data.forEach((p) => {
            allDates.add(p.date);
          });
          const sortedArrray = Array.from(allDates).sort();
          setdateArr(sortedArrray);
          setdate(sortedArrray[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [city]);

  return (
    <>
      <Navbar />
      {/* Date Selector */}
      <div className="bg-gray-100 py-4 shadow-sm">
        <ul className="flex flex-wrap justify-center gap-3">
          {dateArr.map((date, i) => (
            <li
              key={i}
              className={`cursor-pointer px-4 py-2 rounded-lg border-2 ${
                date === currentDate
                  ? "bg-amber-400 border-amber-600 text-black font-semibold"
                  : "hover:bg-amber-100 border-amber-300 text-gray-700"
              } transition duration-200`}
              onClick={() => setdate(date)}
            >
              {date}
            </li>
          ))}
        </ul>
      </div>
      {/* Event Cards */}
      <div className="p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => (
          p.date==currentDate &&
          <div
            key={i}
            className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
            onClick={() => {
              handleClick(p.date, p.location, p.time,p.name);
            }}
          >
            <img
              src={`http://localhost:4000/${p.image}` ? `http://localhost:4000/${p.image}`: p.image}
              alt={""}
              className="object-cover h-[200px] sm:h-auto sm:w-[40%]"
            />
            <div className="p-4 flex flex-col justify-around space-y-2">
              <h2 className="text-lg font-bold text-gray-800">{p.name}</h2>
              <h2 className="text-sm text-gray-600 font-medium">
                Location: <span className="text-gray-800">{p.location}</span>
              </h2>
              <h2 className="text-sm text-gray-600 font-medium">
                Time:{" "}
                <button className="px-3 py-1 rounded-lg bg-amber-100 border border-amber-500 hover:bg-amber-200 transition text-sm font-semibold text-gray-800">
                  {p.time}
                </button>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Events;

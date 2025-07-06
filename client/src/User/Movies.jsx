import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Movies = () => {
  const navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [dateArr, setdateArr] = useState([]);
  let city = useSelector((state) => state.City?.value);
  const [currentDate, setdate] = useState(null);

  function handleClick(currentDate, location, time, eventName,image) {
    navigate("/movies/seatselection", {
      state: { date: currentDate, location, time, city, eventName,image },
    });
  }

  useEffect(() => {
    if (city) {
      fetch("http://localhost:4000/movies", {
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
          data.forEach((movie) => {
            movie.timing.forEach((entry) => {
              entry.shows.forEach((show)=>{
                if(show.time.length>0){
                  allDates.add(entry.date)
                }
              })
            });
          });
          const sortedArrray = Array.from(allDates).sort();
          setdateArr(sortedArrray);
          setdate(sortedArrray[0]);
        })
        .catch((err) => console.log(err));
    }
  }, [city]);

  const moviesForCurrentDate = data.filter((movie) =>
  movie.timing.some((t) =>
    t.date === currentDate &&
    t.shows.some((show) => show.time.length > 0)
  )
);


  console.log(moviesForCurrentDate);

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
                  ? "bg-amber-300 border-amber-600 text-black"
                  : "hover:bg-amber-100 border-amber-400 text-gray-700"
              } transition`}
              onClick={() => setdate(date)}
            >
              {date}
            </li>
          ))}
        </ul>
      </div>

      {/* Movie Cards */}
      <div className="p-6 grid grid-cols-3  gap-6">
        {moviesForCurrentDate.map((movie) => {
          const dateTiming = movie.timing.find(
            (entry) => entry.date === currentDate
          );
          return (
            <div
              key={movie.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col sm:flex-row"
            >
              <img
                src={`http://localhost:4000/${movie.image}`}
                alt={movie.name}
                className="object-cover h-[200px] sm:h-auto sm:w-[40%]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = movie.image;
                }}
              />

              <div className="p-4 w-full">
                <h2 className="text-xl font-bold mb-2">{movie.name}</h2>
                {dateTiming.shows.map((show, j) => (
                  <div
                    key={j}
                    className="border border-gray-200 rounded-xl p-3 mb-4"
                  >
                    <h3 className="text-sm font-semibold text-gray-600">
                      {show.location}
                    </h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {show.time.map((slot, k) => (
                        <button
                          key={k}
                          onClick={() =>
                            handleClick(
                              currentDate,
                              show.location,
                              slot,
                              movie.name,
                              movie.image
                            )
                          }
                          className="px-4 py-1 rounded-lg border border-amber-500 bg-amber-100 hover:bg-amber-200 text-sm"
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Movies;

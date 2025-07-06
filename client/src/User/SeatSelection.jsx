import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setNavigateTo } from "../features/NavigateTo.js";

const SeatSelection = () => {
  const isLoggedIn = useSelector((state) => state.isLoggedIn?.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [occupiedSeats, setOccupiedSeats] = useState([]);
  const [SelectedSeats, setSelectedSeats] = useState([]);
  const locationState = useLocation();
  const { date, location, time, city,eventName,image} = locationState.state;
  const noSpaces=location.replace(/\s+/g,'');
  const name = `${date}${noSpaces}${time}`.replace(/[^a-zA-Z0-9]/g, '_');
  const handleSeatToggle = (seatId) => {
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleConfirm = () => {
    if (SelectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    } else if (!isLoggedIn) {
      alert("Please Login first to Confirm Booking");
      dispatch(setNavigateTo("/movies"));
    } else {
      navigate("/movies/seatselection/confirmation", {
        state: { date, location, time, SelectedSeats, city,eventName,image },
      });
    }
  };

  useEffect(() => {
    fetch(`http://localhost:4000/movies/seatselection/`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ date, location, time }),
    })
      .then((res) => res.json())
      .then((arr) => {
        setOccupiedSeats(arr.map((seat) => seat.seatno));
      });
  }, [date, location, time]);

  const rows = Array.from({ length: 9 }, (_, i) => i + 1);
  const columns = Array.from({ length: 26 }, (_, i) =>
    String.fromCharCode(65 + i)
  );

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:3000");
    socket.onopen = () =>{
      console.log("connecte to websocket");
    }

    socket.onmessage = (event) =>{
      const msg=JSON.parse(event.data);

      if(msg.type==="seat_update"){
        const {seatno,status,eventKey} = msg.data;


        if(eventKey===name){
          if(status==="booked"){
            setOccupiedSeats(prev => prev.includes(seatno) ? prev : [...prev, seatno]);
          }
          else if(status==="cancelled"){
            setOccupiedSeats(prev=>prev.filter(seat => seat !== seatno));

          }
        }
      }
    }
    return () => {
      socket.close();
    }
  }, [name])
  

  return (
    <div className="h-screen">
      <button
        onClick={() => navigate("/movies")}
        className="absolute top-4 left-4 bg-gray-200 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition-all duration-200"
      >
        ← Back
      </button>

      <h1 className="text-center font-bold text-4xl mt-4 text-[#FF6B00]">
        Select Seat
      </h1>
      <div className="flex flex-col items-center  pt-8">
        <div className="bg-slate-100 p-8 rounded-2xl shadow-xl border border-slate-300 transition-all duration-300">
          <div className="text-center font-bold text-xl mb-6 bg-slate-300 py-2 px-4 rounded-lg text-gray-800 shadow-inner">
            Screen
          </div>
          <div className="grid grid-cols-[repeat(26,2rem)] gap-2">
            {rows.map((row) =>
              columns.map((col) => {
                const seatId = `${col}${row}`;
                const isOccupied = occupiedSeats.includes(seatId);
                const isSelected = SelectedSeats.includes(seatId);

                return (
                  <div
                    key={seatId}
                    className={`w-8 h-8 flex items-center justify-center rounded cursor-pointer text-xs transition-all duration-150
                      ${
                        isOccupied
                          ? "bg-red-400 cursor-not-allowed opacity-60"
                          : "bg-green-300 hover:bg-green-400 hover:scale-105"
                      }
                      ${
                        isSelected
                          ? "border-2 border-black shadow-md"
                          : "border border-transparent"
                      }`}
                    onClick={() => !isOccupied && handleSeatToggle(seatId)}
                    title={seatId}
                  ></div>
                );
              })
            )}
          </div>
        </div>

        <button
          className="mt-6 px-8 py-3 bg-[#FF6B00] text-white rounded-lg hover:bg-orange-600 font-semibold transition duration-300 shadow-md hover:shadow-lg active:scale-95"
          onClick={handleConfirm}
        >
          Confirm Booking
        </button>
      </div>
      <div className=" px-6 py-2 bg-[#9AC4F8] w-[100%] text-black fixed bottom-0 font-semibold shadow-inner text-lg">
        Total Cost: ₹{SelectedSeats.length * 299}
      </div>
    </div>
  );
};

export default SeatSelection;

import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import QRCode from "qrcode";

const ConfirmBooking = () => {
  const [QR, setQR] = useState("");
  const name = useSelector((state) => state.Name?.value);
  const wallet = useSelector((state) => state.Wallet?.value);
  const email = useSelector((state) => state.Email?.value);
  const locations = useLocation();
  const { date, location, time, SelectedSeats, city, eventName,image } = locations.state;
  const ticketRef = useRef(null);

  useEffect(() => {
    console.log(date);
    QRCode.toDataURL(
      `${date},${location},${time},${SelectedSeats.join(" ")},${city}`,
      function (err, url) {
        setQR(url);
      }
    );
  }, []);

  const buy = async () => {
    try {
      const response = await fetch("http://localhost:4000/payment", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ selectedSeats: SelectedSeats, email, wallet }),
      });

      if (response.status === 200) {
        const data = await response.json();
        localStorage.setItem(
          "booking",
          JSON.stringify({
            date,
            location,
            time,
            city,
            selectedSeats: SelectedSeats,
            bookingRef: `${date[0].replace(/[^a-zA-Z0-9]/g, "_")}${location.replace(/\s+/g, "")}${time[0].replace(/[^a-zA-Z0-9]/g, "_")}${SelectedSeats.join("")}`,
            qrurl: QR,
            eventName,
            image
          })
        );
        window.location.href = data.session.url;
      }
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#9AC4F8] flex flex-col md:flex-row items-center justify-center p-6 gap-6">
      <div
        ref={ticketRef}
        className="relative bg-white rounded-xl shadow-2xl flex w-full max-w-4xl h-56 overflow-hidden"
      >
        {/* Orange stub side */}
        <div className="w-1/3 bg-[#FF6B00] text-white p-6 flex flex-col justify-between relative">
          <div>
            <h2 className="text-xl font-bold">Movie Ticket</h2>
            <p className="text-sm mt-2">{`Admit ${SelectedSeats.length}`}</p>
          </div>
          <div className="flex items-center">
            <div className="text-sm">
              <p className="font-semibold">Seat(s)</p>
              <p className="text-lg tracking-widest">
                {SelectedSeats.join(" ")}
              </p>
            </div>
            {QR && <img src={QR} className="h-20 w-20 ml-10" alt="QR Code" />}
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-20 bg-[#9AC4F8] rounded-full"></div>
        </div>

        {/* Ticket body with event name */}
        <div className="w-2/3 p-6 flex flex-col justify-between text-gray-800">
          <div>
            <h3 className="text-2xl font-bold text-[#FF6B00] mb-2">
              {eventName}
            </h3>
            <div className="flex justify-between">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-semibold">{name}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Date</p>
                <p className="font-semibold">{date}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Time</p>
                <p className="font-semibold">{time}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-between items-end">
            <div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-semibold">{location}</p>
            </div>
            <p className="text-xs text-right text-gray-400">
              Please arrive 15 mins early
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm text-gray-800">
        <h2 className="text-xl font-bold text-[#FF6B00] mb-4">
          Payment Summary
        </h2>
        <div className="mb-2">
          <p className="text-sm text-gray-600">Amount to Pay</p>
          <p className="text-lg font-semibold">
            Rs. {SelectedSeats.length * 299}
          </p>
        </div>
        <div className="mb-4">
          <p className="text-sm text-gray-600">Wallet Balance</p>
          <p className="text-lg font-semibold">Rs. {wallet}</p>
        </div>
        <button
          onClick={buy}
          className="w-full py-2 bg-[#FF6B00] hover:bg-orange-500 text-white rounded-md font-semibold shadow-md"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default ConfirmBooking;

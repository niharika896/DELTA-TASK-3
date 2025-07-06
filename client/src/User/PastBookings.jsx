import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PastBookings = () => {
  const currDate = "2025-06-19";
  const email = useSelector((state) => state.Email?.value);
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  const handleCancel = async (booking) => {
    const confirmed = window.confirm("Are you sure you want to cancel this booking?");
    if (confirmed) {
      const response = await fetch("http://localhost:4000/cancelbooking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ pastBookings: booking, email : email }),
      });

      if(response.ok){
        fetch("http://localhost:4000/pastbookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
      }
    }else{return;}
  };

  const handleDownload = async (booking) => {
    const response = await fetch("http://localhost:4000/generatepdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ pastBookings: booking, email:email}),
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "ticket.pdf";
    a.click();
    window.URL.revokeObjectURL(url);
  };

  useEffect(() => {
    if (!email) return;

    fetch("http://localhost:4000/pastbookings", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((err) => {
        console.error("Error fetching bookings:", err);
      });
  }, [email]);

  return (
    <div className="min-h-screen bg-[#9AC4F8] py-8 px-4 md:px-16">
      <button
        onClick={() => navigate("/")}
        className="mb-4 bg-[#FF6B00] text-white px-4 py-2 rounded-md shadow hover:bg-orange-500 transition duration-200"
      >
        ← Back to Home
      </button>
      <h1 className="text-4xl font-bold text-center text-black mb-10">
        Your Past Bookings
      </h1>

      {bookings.length === 0 ? (
        <p className="text-center text-gray-700 text-lg">No bookings found.</p>
      ) : (
        <div className="grid gap-8 md:grid-cols-2">
          {[...bookings].reverse().map((booking, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md transform transition duration-300 hover:scale-[1.02] hover:shadow-xl border-l-4 border-[#FF6B00] hover:border-[#FF6B00] p-5 flex flex-col md:flex-row items-center group"
            >
              <div className="flex-1">
                <p className="text-xs text-gray-500 mb-1">
                  <strong>Booking Ref:</strong> {booking.bookingRef}
                </p>
                <p className="text-xl font-semibold text-[#FF6B00] mb-2">
                  {booking.eventName}
                </p>
                <div className="flex">
                  <p className="text-sm text-gray-700">
                  <strong>Date:</strong> {booking.date}
                </p>
                <p className="text-sm text-gray-700 ml-2.5">
                  <strong>Date:</strong> {booking.time}
                </p>
                <p className="text-sm text-gray-700 ml-2.5">
                  <strong>Seats:</strong> {booking.selectedSeats?.join(", ")}
                </p>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Location:</strong>{" "}
                  {`${booking.location}, ${booking.city}`}
                </p>
                <button
                  onClick={() => handleDownload(booking)}
                  className="mt-4 inline-flex items-center gap-2 bg-[#FF6B00] text-white px-4 py-2 rounded-md shadow-md hover:bg-orange-500 hover:shadow-lg transition duration-200"
                >
                  Download Ticket
                </button>
                {booking.date > currDate && (
                  <button
                    onClick={() => handleCancel(booking)}
                    className="mt-4 ml-6 inline-flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-red-700 hover:shadow-lg transition duration-200"
                  >
                    Cancel Booking
                  </button>
                )}
              </div>
              <div className="mt-4 md:mt-0 md:ml-6">
                <img
                  src={booking.qrurl}
                  alt="QR Code"
                  className="w-24 h-24 object-contain border-2 border-[#FF6B00] rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PastBookings;

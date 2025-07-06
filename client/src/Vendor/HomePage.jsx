import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [myinfo, setmyinfo] = useState(null);
  const vid = useSelector((state) => state.vendorId?.value);
  const date = new Date();
  const y= date.getFullYear
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch("http://localhost:4000/vendor/info");
      const info = await data.json();
      const my_data = info.find((entry) => entry.vendor_id === vid);
      setmyinfo(my_data);
    };
    fetchData();
  }, [vid]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">My Events</h2>

        {!myinfo ? (
          <p className="text-gray-600">Loading...</p>
        ) : myinfo.listings.length === 0 ? (
          <p className="text-gray-500">No events found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {myinfo.listings.map((event, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-5 border border-gray-200"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-600">
                  <strong>Date:</strong> {event.date}
                </p>
                <p className="text-gray-600">
                  <strong>Time:</strong> {event.time}
                </p>
                <p className="text-gray-600">
                  <strong>City:</strong> {event.city}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {event.location}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;

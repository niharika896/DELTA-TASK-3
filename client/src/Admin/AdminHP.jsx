import React, { useEffect, useState } from 'react'
import Navbar from './components/NavbarA'
import { Loader2 } from 'lucide-react'

const AdminHP = () => {
  const [Movies, setMovies] = useState([]);
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const getEvents = async () => {
      try {
        const data = await fetch("http://localhost:4000/admin-hp");
        const result = await data.json();
        setMovies(result[0]);
        setEvents(result[1]);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };
    getEvents();
  }, []);

  const Loading = () => (
    <div className="flex items-center justify-center py-10 text-blue-500">
      <Loader2 className="animate-spin w-6 h-6 mr-2" />
      Loading...
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-4xl font-extrabold text-center text-orange-500 mb-10 tracking-tight">
          Top Performing Shows
        </h1>

        {/* Movies Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-6 bg-orange-500 rounded-sm"></div>
            <h2 className="text-2xl font-bold text-gray-800">Top Movies</h2>
          </div>
          {Movies.length === 0 ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Movies.map((entry, index) => (
                <div
                  key={index}
                  className="bg-white border border-orange-200 p-6 rounded-xl shadow hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-orange-600 mb-2">{entry.movie.name}</h3>
                  <p className="text-gray-700"><span className="font-medium text-blue-600">Date:</span> {entry.movie.date}</p>
                  <p className="text-gray-700"><span className="font-medium text-blue-600">Time:</span> {entry.movie.time}</p>
                  <p className="text-gray-700"><span className="font-medium text-blue-600">Location:</span> {entry.movie.location}</p>
                  <div className="mt-3 text-sm text-white inline-block px-3 py-1 bg-orange-500 rounded-full">
                    {entry.length} seats booked
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Events Section */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-2 h-6 bg-blue-500 rounded-sm"></div>
            <h2 className="text-2xl font-bold text-gray-800">Top Events</h2>
          </div>
          {Events.length === 0 ? (
            <Loading />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Events.map((entry, index) => (
                <div
                  key={index}
                  className="bg-white border border-blue-200 p-6 rounded-xl shadow hover:shadow-xl transition"
                >
                  <h3 className="text-xl font-semibold text-blue-600 mb-2">{entry.event.name}</h3>
                  <p className="text-gray-700"><span className="font-medium text-orange-600">Date:</span> {entry.event.date[0]}</p>
                  <p className="text-gray-700"><span className="font-medium text-orange-600">Time:</span> {entry.event.time[0]}</p>
                  <p className="text-gray-700"><span className="font-medium text-orange-600">Location:</span> {entry.event.location}</p>
                  <div className="mt-3 text-sm text-white inline-block px-3 py-1 bg-blue-500 rounded-full">
                    {entry.length} seats booked
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default AdminHP;

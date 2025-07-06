import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Audit = () => {
  const { id } = useParams();
  const [data, setDATA] = useState([]);
  const navigate = useNavigate();
  function handleEdit(id,name,date,city,location,time,type){
    navigate(`/edit/${id}/${name}/${date}/${city}/${location}/${time}/${type}`);
    
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:4000/admin/vendors/audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      const result = await response.json();
      console.log(result[0].listings);
      setDATA(result[0].listings);
    };

    fetchData();
  }, [id]);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Vendor Event Audit</h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500">No events found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((event, i) => (
            <div
              key={i}
              className="bg-white p-5 rounded-xl shadow-md border border-gray-200 flex flex-col gap-2"
            >
              <h2 className="text-xl font-semibold text-gray-800">{event.name}</h2>
              <p className="text-gray-600"><strong>Date:</strong> {event.date}</p>
              <p className="text-gray-600"><strong>Time:</strong> {event.time}</p>
              <p className="text-gray-600"><strong>City:</strong> {event.city}</p>
              <p className="text-gray-600"><strong>Location:</strong> {event.location}</p>
              <div className="mt-4 flex gap-3">
                <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition" onClick={()=>{handleEdit(id,event.name,event.date,event.city,event.location,event.time,event.type)}}>
                  Edit Info
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
                  Delete Event
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Audit;

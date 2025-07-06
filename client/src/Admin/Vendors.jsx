import React, { useEffect, useState } from "react";
import Navbar from "./components/NavbarA.jsx";
import { useNavigate } from "react-router-dom";

const Vendors = () => {
  const [vendors, setVendors] = useState([]);
  const [choice, setchoice] = useState("approved");
  const navigate = useNavigate();

  const fetchVendors = async () => {
    try {
      const response = await fetch("http://localhost:4000/admin/vendors");
      const data = await response.json();
      setVendors(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    fetchVendors();
  }, []);

  async function handleApproval(id, status) {
    const response = await fetch(
      "http://localhost:4000/admin/vendors/approval",
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ id: id, status: status }),
      }
    );
    console.log(response);
    if (response.ok) {
      fetchVendors();
    }
  }

  return (
    <>
      <Navbar />
      <div className="items-center flex justify-center mt-4">
        <ul className="flex">
          <li
            className={`px-4 py-2 rounded-full cursor-pointer m-4 transition duration-200 
          hover:bg-blue-500 hover:text-white ${
            choice === "approved" ? "bg-blue-600 text-white" : "text-gray-700"
          }`}
            onClick={() => setchoice("approved")}
          >
            Approved
          </li>
          <li
            className={`px-4 py-2 rounded-full cursor-pointer m-4 transition duration-200 
          hover:bg-blue-500 hover:text-white ${
            choice === "waiting" ? "bg-blue-600 text-white" : "text-gray-700"
          }`}
            onClick={() => setchoice("waiting")}
          >
            Waiting
          </li>
          <li
            className={`px-4 py-2 rounded-full cursor-pointer m-4 transition duration-200 
          hover:bg-blue-500 hover:text-white ${
            choice === "Declined" ? "bg-blue-600 text-white" : "text-gray-700"
          }`}
            onClick={() => setchoice("declined")}
          >
            Declined
          </li>
          <li
            className={`px-4 py-2 rounded-full cursor-pointer m-4 transition duration-200 
          hover:bg-blue-500 hover:text-white ${
            choice === "cancelled" ? "bg-blue-600 text-white" : "text-gray-700"
          }`}
            onClick={() => setchoice("cancelled")}
          >
            Cancelled
          </li>
        </ul>
      </div>
      <div className="min-h-screen bg-gray-50 p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {vendors.map(
            (vendor, i) =>
              vendor.status === choice && (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center"
                >
                  <img
                    src={vendor.image}
                    alt="Profile"
                    className="w-24 h-24 rounded-full mb-4 object-cover"
                  />
                  <h3 className="text-xl font-semibold">{vendor.name}</h3>
                  <p className="text-gray-600 mb-3">{vendor.email}</p>
                  <p className="text-gray-600 mb-3">Vendor Id:{vendor.vendor_id}</p>

                  <div className="flex">

                  {vendor.status != "waiting" &&
                    vendor.status != "declined" && (
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-md m-2 hover:bg-blue-700" onClick={()=>{
                        navigate(`/vendors/audit/${vendor.vendor_id}`);
                      }}>
                        Audit
                      </button>
                    )}
                  {
                    (vendor.status === "approved" && (
                      <button className="bg-amber-600 text-white px-4 py-2 rounded-md m-2 hover:bg-amber-700" onClick={()=>handleApproval(vendor._id,"cancelled")}>
                        Cancel Vendor
                      </button>
                    ))
                  }
                  </div>

                  <div className="flex gap-2">
                  {(vendor.status!=="approved")&& (
                      <button
                        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
                        onClick={() => handleApproval(vendor._id, "approved")}
                      >
                        Approve
                      </button>
                  )}
                  {(vendor.status==="waiting")&&
                      <button
                        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                        onClick={() => handleApproval(vendor._id, "declined")}
                      >
                        Decline
                      </button>
                      }
                      </div>
                </div>
              )
          )}
        </div>
      </div>
    </>
  );
};

export default Vendors;

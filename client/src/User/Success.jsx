import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Success = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const userData = JSON.parse(localStorage.getItem("booking") || "{}");
  const email = useSelector((state) => state.Email?.value);

  const handleDownload = async () => {
    const response = await fetch("http://localhost:4000/generatepdf", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({pastBookings:Data,email:email}),
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
    fetch(`http://localhost:4000/success`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ email, userData }),
    }).then(() => {
      setData(userData);
      localStorage.removeItem("booking");
    });
  }, []);



  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-2">Payment Successful</h1>
        <p className="text-gray-600 mb-6">
          Thank you! Your payment has been processed successfully. You can download the ticket as well as receive it on your mail now or later as well.
        </p>

        <div className="flex flex-col gap-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition"
            onClick={() => handleDownload()}
          >
            Download PDF Ticket
          </button>

          <button
            className="border border-gray-300 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg transition"
            onClick={() => navigate("/")}
          >
            Go Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Success;

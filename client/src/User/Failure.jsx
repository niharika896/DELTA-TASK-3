import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Failure = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      localStorage.removeItem("booking");
      navigate("/");
    }, 2000);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-50 px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 max-w-md text-center">
        <div className="text-red-600 text-5xl mb-4">✕</div>
        <h1 className="text-2xl font-bold mb-2 text-red-700">Payment Failed</h1>
        <p className="text-gray-600 mb-4">
          Something went wrong with your payment.
        </p>
        <p className="text-gray-500 text-sm">
          Redirecting you to the homepage...
        </p>
      </div>
    </div>
  );
};

export default Failure;

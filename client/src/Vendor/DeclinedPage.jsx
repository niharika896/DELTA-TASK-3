import React,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setType } from '../features/ProfileType';

const DeclinedPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setType("user"));
  }, [])
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#fef6f3] px-4 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md space-y-6 border-t-4 border-red-500">
        <h2 className="text-2xl font-bold text-red-600">Authorization Declined</h2>
        <p className="text-gray-700">
          Your account authorization has been declined. If you believe this is a mistake, please contact the administrator.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-200"
        >
          Go to Home
        </button>
      </div>
    </div>
  )
}

export default DeclinedPage

import React ,{useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { setType } from '../features/ProfileType';


const WaitPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
    useEffect(() => {
      dispatch(setType("user"));
    }, [])
    
  

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f3f9fe] px-4 text-center">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md space-y-6">
        <h2 className="text-2xl font-bold text-[#FF6B00]">Account Awaiting Authorization</h2>
        <p className="text-gray-700">
          Your account is currently waiting for authorization. Please wait or contact the administrator if you believe this is a mistake.
        </p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-[#FF6B00] text-white font-semibold rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default WaitPage

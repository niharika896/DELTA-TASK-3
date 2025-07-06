import React,{useState} from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { toggler } from "../features/isLoggedIn";
import { setName } from "../features/Name";
import { setImage } from "../features/Image";
import { setType } from "../features/ProfileType";
import { setCity } from "../features/City";
import { setEmail } from '../features/Email';

const UsernameLogin = () => {
  const dispatch = useDispatch();
  const [newUser, setNew] = useState(false)
  const { register, handleSubmit, formState: { errors },getValues } = useForm();
  const navigate = useNavigate();
  const { type } = useParams();

  
  const onSubmit = async(data) => {
    console.log("fteching");
    const response = await fetch("http://localhost:4000/username-login",{
      method:"POST",
      headers:{"Content-type":"application/json"},
      body:JSON.stringify({type:type,data:data})
    })
    const ans = await response.json();
    console.log(ans);
    if(ans.message===2){
        const user = ans.user;
        dispatch(toggler(true));
        dispatch(setType("user"));
        dispatch(setName(user.name));
        dispatch(setCity(user.city));
        dispatch(setImage(user.image));
        dispatch(setEmail(user.email)); 
         navigate("/")
      }
      else{
        setNew(true);
      }
    };
    
    const handleNewUser = async(data) => {
      const datanew = getValues();
      localStorage.setItem("data",JSON.stringify(datanew));
      console.log("set");
      navigate(`/auth/new-user`)
  };


  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fef6f3] to-[#f3f9fe] flex items-center justify-center px-4 py-8 relative">

      {/* Back Button */}
      <button
        onClick={() => navigate(`/login/${type}`)}
        className="absolute top-6 left-6 flex items-center text-[#FF6B00] hover:text-orange-700 font-semibold"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back
      </button>

      {/* Login Box */}
      <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 border-t-[6px] border-[#FF6B00] max-w-sm w-full">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-6"
      >
        <h1 className="text-2xl font-bold text-[#FF6B00]">Login with Username</h1>

        {/* Username Field */}
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            {...register('username', { required: 'Username is required' })}
            className="w-full px-4 py-2 border m-4 ml-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          {errors.username && (
            <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="w-full">
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: 'Password is required',
              minLength: { value: 6, message: 'Minimum 6 characters' },
            })}
            className="w-full px-4 py-2 border rounded-lg m-4 ml-0 focus:outline-none focus:ring-2 focus:ring-orange-300"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>
        {newUser && <p className="text-red-500 text-sm mt-1">Invalid Username or Password</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#FF6B00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200 m-4 ml-0"
        >
          Login
        </button>

      </form>
        {newUser && <button
            className="w-full bg-[#FF6B00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200" onClick={handleNewUser}
        >New User? SignUp
        </button>}
        </div>
    </div>
  );
};

export default UsernameLogin;

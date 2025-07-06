import React from "react";
import { useNavigate } from "react-router-dom";
import { googleAuth } from "../api.js";
import { GoogleOAuthProvider, useGoogleLogin } from "@react-oauth/google";
import logo from "../assets/google.png";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggler } from "../features/isLoggedIn.js";
import { setName } from "../features/Name.js";
import { setEmail } from "../features/Email.js";
import { setImage } from "../features/Image.js";
import { setWallet } from "../features/Wallet.js";
import { ArrowLeft } from "lucide-react";
import { setType } from "../features/ProfileType.js";
import { setvendorId } from "../features/vendorId.js";

const GoogleLogin = ({ type }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const responseGoogle = async (authResult) => {
    try {
      if (authResult["code"]) {
        const response = await fetch(
          `http://localhost:4000/auth/google?code=${authResult["code"]}&type=${type}`
        );
        const result = await response.json();
        console.log("result", result);
        if (type === "user") {
          const { email, name, image, pastBookings, wallet, profiletype } =
            result.user;
          dispatch(toggler());
          dispatch(setName(name));
          dispatch(setEmail(email));
          dispatch(setImage(image));
          dispatch(setWallet(wallet));
          dispatch(setType(profiletype));
          navigate(`/auth/userdetails`);
        } 
        else if (type === "vendor") {
          const {
            email,
            name,
            image,
            vendor_id,
            profiletype,
            listings,
            status,
          } = result.user;
          dispatch(setType(profiletype));
          if(status==="declined"){
            navigate("/declinedpage");
          }
          else if(status==="waiting"){
            navigate("/waitpage");   
          }
          else {
            dispatch(toggler());
            dispatch(setName(name));
            dispatch(setEmail(email));
            dispatch(setImage(image));
            dispatch(setvendorId(vendor_id));
            dispatch(setType(profiletype));
            navigate("/");
          } 
        } else {
          const { email, name, image, profiletype } = result.user;
          dispatch(toggler());
          dispatch(setName(name));
          dispatch(setEmail(email));
          dispatch(setImage(image));
          dispatch(setType(profiletype));
          navigate("/");
        }
      }
    } catch (err) {
      console.log("error in GoogleLogin.jsx", err);
    }
  };

  const googleLogin = useGoogleLogin({
    onSuccess: responseGoogle,
    onError: responseGoogle,
    flow: "auth-code",
  });

  function handleUsername(){
    console.log(type);
    navigate(`/username-login/${type}`);
  }

  return (
  <div className="min-h-screen bg-gradient-to-br from-[#fef6f3] to-[#f3f9fe] flex items-center justify-center px-4 py-8 relative">
    <button
      onClick={() => {
        dispatch(setType("user"));
        navigate("/");
      }}
      className="absolute top-6 left-6 flex items-center text-[#FF6B00] hover:text-orange-700 font-semibold"
    >
      <ArrowLeft className="w-5 h-5 mr-2" />
      Back
    </button>

    <div className="bg-white p-10 rounded-3xl shadow-2xl flex flex-col items-center gap-6 border-t-[6px] border-[#FF6B00] max-w-sm w-full">
      <h1 className="text-2xl font-bold text-[#FF6B00]">Login to Continue</h1>

      <button
        className="flex items-center gap-3 bg-[#FF6B00] text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition duration-200 shadow"
        onClick={() => googleLogin()}
      >
        <img src={logo} alt="Google" className="h-6 w-6" />
        Login With Google
      </button>

      {/* Divider */}
      <div className="w-full flex items-center gap-2">
        <hr className="flex-grow border-gray-300" />
        <span className="text-gray-500 text-sm">OR</span>
        <hr className="flex-grow border-gray-300" />
      </div>

      <button
        onClick={handleUsername}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition duration-200"
      >
        Login with Username & Password
      </button>

      {/* Mobile Number Login */}
      <button
        onClick={() => {/* handle mobile login redirect */}}
        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold px-6 py-3 rounded-lg transition duration-200"
      >
        Login with Mobile Number
      </button>
    </div>
  </div>
);

};

function GoogleAuthWrapper() {
  const { type } = useParams();
  return (
    <GoogleOAuthProvider clientId="1059433563556-0shatran10jtin1mncrlvgd26nugbqpm.apps.googleusercontent.com">
      <GoogleLogin type={type} />
    </GoogleOAuthProvider>
  );
}

export default GoogleAuthWrapper;

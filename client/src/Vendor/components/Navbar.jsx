import React from "react";
import logo from "../../assets/logo-bg.png";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggler } from "../../features/isLoggedIn";
import { setName } from "../../features/Name";
import { setImage } from "../../features/Image";
import { setType } from "../../features/ProfileType";
import { setvendorId } from "../../features/vendorId";

const Navbar = () => {
  const Name = useSelector(state=>state.Name?.value);
  const Image = useSelector(state=>state.Image?.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCreateEvent = () => {
    navigate("/create-event");
  };

  const handleLogout = () => {
    dispatch(toggler());
    dispatch(setName(""));
    dispatch(setType("user"));
    dispatch(setImage(""));
    dispatch(setvendorId(""));
  };

  return (
    <div className="flex items-center justify-between bg-slate-200 shadow-md p-4 px-6">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src={logo} alt="Logo" className="h-10 w-auto" />
        <span className="text-xl font-semibold">Take Me Somewhere</span>
      </div>

      {/* Navigation and User Info */}
      <div className="flex items-center gap-6">
        <ul className="flex gap-4 text-gray-700 font-medium">
          <li
            onClick={handleCreateEvent}
            className="cursor-pointer hover:text-blue-500"
          >
            Create Event
          </li>
        </ul>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <img
            src={Image}
            alt="Profile"
            className="h-10 w-10 rounded-full object-cover"
          />
          <span className="text-gray-800 font-semibold">Hi, {Name}</span>

          <button
            onClick={handleLogout}
            className="ml-4 px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import logo from "../../assets/logo-bg.png";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { toggler } from "../../features/isLoggedIn";
import { setName } from "../../features/Name";
import { setImage } from "../../features/Image";
import { setType } from "../../features/ProfileType";

const Navbar = () => {
  const dispatch = useDispatch();
  const isLoggedIn=useSelector(state=>state.isLoggedIn?.value);
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-200 sticky top-0 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src={logo}
            alt="Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>

        <ul className="flex space-x-6 font-medium text-gray-700">
          <li
            className="hover:text-blue-600 cursor-pointer transition"
            onClick={() => navigate("/vendors")}
          >
            Vendors
          </li>
          {isLoggedIn && (
            <li
              className="hover:text-blue-600 cursor-pointer transition"
              onClick={() => {
                dispatch(toggler());
                dispatch(setType("user"));
                dispatch(setName(""));
                dispatch(setImage(""));
                dispatch(setEmail(""));
              }}
            >
              Logout
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

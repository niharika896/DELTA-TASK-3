import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggler } from "../features/isLoggedIn";
import { setName } from "../features/Name";
import { setImage } from "../features/Image";
import { setType } from "../features/ProfileType";
import { setCity } from "../features/City";
import {persistor} from "../redux/store-persist.js"
const SideBar = ({state,name,closeSideBar}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();   


  function handleLogout() {
    closeSideBar();
    dispatch(toggler());
    dispatch(setType("user"));
    dispatch(setName(""));
    dispatch(setCity("Delhi"));
    dispatch(togglerCity(false));
    dispatch(setImage(""));
    persistor.purge();
  }

  return (
    <div>
      <div
        className={`absolute right-0 w-64 h-full bg-white shadow-xl z-30 transform transition-transform duration-300 ease-in-out ${
          state
            ? "translate-x-0 visible pointer-events-auto"
            : "translate-x-full invisible pointer-events-none"
        }`}
      >
        <div className="p-4 border-b font-bold text-lg">
          Welcome, {name}
        </div>
        <ul className="p-4">
          <li
            className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => {
              navigate("/profile");
            }}
          >
            Profile
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => {
              navigate("/pastbookings");
            }}
          >
            My Bookings
          </li>
          <li
            className="py-2 px-4 hover:bg-gray-100 rounded cursor-pointer"
            onClick={() => {
              handleLogout();
            }}
          >
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;

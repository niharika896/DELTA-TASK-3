import React, { useEffect, useRef, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { IoWalletSharp } from "react-icons/io5";
import logo from "../assets/logo-bg.png"
import {useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../features/City";
import SideBar from "./SideBar";
const Navbar = () => {
  const [cityDropdown, setcityDropdown] = useState(false);
  const [walletDropdown, setwalletDropdown] = useState(false);
  const [sideBar, setsideBar] = useState(false);
  const wallet = useSelector((state) => state.Wallet?.value);
  const dispatch = useDispatch();
  const City = useSelector((state) => state.City?.value);
  const isLoggedIn = useSelector((state) => state.isLoggedIn?.value);
  const Name = useSelector((state) => state.Name?.value);
  const Image = useSelector((state) => state.Image?.value);
  const Type = useSelector((state) => state.Type?.value);
  let optionsLogin = useRef(null);
  let navigate = useNavigate();
  const existingUser = JSON.parse(localStorage.getItem("user"));


  return (
    <div className="max-w-screen">
      <div>
        <nav className="flex bg-slate-200 sticky top-0">
          <img
            src={logo}
            alt="logo"
            className="h-[10vh]"
            onClick={() => navigate("/")}
          />
          <ul className="flex items-center justify-center">
            <li
              className="m-3 px-4 py-2 border-2 border-transparent hover:bg-[#FF6B00] rounded-md"
              onClick={() => navigate("/movies")}
            >
              Movies
            </li>
            <li
              className="m-3 px-4 py-2 border-2 border-transparent hover:bg-[#FF6B00] rounded-md"
              onClick={() => navigate("/events")}
            >
              Events
            </li>
            <li className="m-3 px-4 py-2 border-2 border-transparent hover:bg-[#FF6B00] rounded-md">
              Railways
            </li>
          </ul>
          <ul className="flex items-center justify-center absolute right-10">
            <li
              className="m-3 text-center justify-center flex px-4 py-2 border-2 border-transparent hover:bg-[#FF6B00] rounded-md"
              onClick={() => setcityDropdown(!cityDropdown)}
            >
              <FaLocationDot className="mr-1 mt-1" />
              {City}
              {cityDropdown && (
                <div className="absolute top-14 bg-white rounded-md shadow-md border w-28 z-20">
                  <ul className="flex flex-col text-sm text-gray-800">
                    {["Delhi", "Bombay", "Chennai"].map((city) => (
                      <li
                        key={city}
                        className="px-4 py-2 hover:bg-slate-100 cursor-pointer rounded-sm"
                        onClick={() => {
                          dispatch(setCity(city));
                          if (existingUser) {
                            existingUser.city = city;
                            localStorage.setItem(
                              "user",
                              JSON.stringify(existingUser)
                            );
                          }
                          setcityDropdown(false);
                          dispatch(togglerCity(true));
                        }}
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
            <li className="relative">
              <div
                className="m-3 text-center justify-center flex px-4 py-2 border-2 border-transparent hover:bg-[#FF6B00] rounded-md cursor-pointer"
                onClick={() => setwalletDropdown(!walletDropdown)}
              >
                <IoWalletSharp className="mr-1 mt-1" />
                Wallet
              </div>
              {walletDropdown && (
                <div className="absolute top-14 right-0 w-40 bg-white border rounded-md shadow-md z-20 wallet-menu">
                  <div className="px-4 py-3 text-gray-700 text-sm">
                    <p className="font-semibold">Balance</p>
                    <p className="text-blue-600 text-lg font-bold mt-1">
                      {wallet}
                    </p>
                  </div>
                </div>
              )}
            </li>

            <li className="flex">
              {!isLoggedIn && (
                <div
                  className="m-3 px-4 py-2 bg-[#FF6B00] rounded-xl hover:opacity-85"
                  onClick={() =>
                    optionsLogin.current.classList.toggle("invisible")
                  }
                >
                  Sign Up
                </div>
              )}
              {isLoggedIn && (
                <div className="m-3 px-4 py-2">{`Hi ${Name.slice(0, 8)}`}</div>
              )}
              {isLoggedIn && (
                <>
                  <img
                    src={Image}
                    alt="Profile"
                    className="h-10 w-10 mt-4 rounded-full border-2 hover:scale-110"
                    onClick={() => setsideBar(!sideBar)}
                  />
                </>
              )}
            </li>
          </ul>
        </nav>

        <div
          ref={optionsLogin}
          className="absolute top-14 right-12 mt-1 w-28 bg-white rounded-md shadow-md border invisible z-20"
        >
          <ul className="p-2 text-sm text-gray-800">
            <li
              className="px-4 py-2 hover:bg-slate-100 cursor-pointer rounded-sm"
              onClick={() => {
                navigate("/login/user")
              }}
            >
              User
            </li>
            <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer rounded-sm"
            onClick={() => {
                navigate("/login/admin")
              }}
            >
              Admin
            </li>
            <li className="px-4 py-2 hover:bg-slate-100 cursor-pointer rounded-sm"
            onClick={() => {
                navigate("/login/vendor")
              }}
            >
              Vendor
            </li>
          </ul>
        </div>
      </div>

      <SideBar
        state={sideBar}
        name={Name}
        closeSideBar={() => {
          setsideBar(false);
        }}
      />
    </div>
  );
};

export default Navbar;

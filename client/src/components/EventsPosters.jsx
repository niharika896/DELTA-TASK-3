import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

const Events = () => {
  const [posters, setPosters] = useState([]);
  const isLoggedIn = useSelector((state) => state.isLoggedIn?.value);
  const Email = useSelector((state) => state.Email?.value);
  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((res) => {
        if (isLoggedIn === false) {
          setPosters(res.data.posters1);
        }
      })
      .catch((err) => console.log(err));
  }, []);

  const recom = async (Email) => {
    const response = await fetch("http://localhost:4000/get-recom", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ email: Email }),
    });
    const data = await response.json();
    const responseText = data.candidates[0].content.parts[0].text;
    const jsonString = responseText
      .replace(/^```json\n/, "")
      .replace(/\n```$/, "");
    const parsedData = JSON.parse(jsonString);
    setPosters(parsedData.posters2);
  };

  if (isLoggedIn === true) {
    recom(Email);
  }

  return (
    <>
      <h1 className="text-2xl font-bold ml-4 ">Recommended Events</h1>
      <div>
        <div className="flex mt-5 ml-5 text-wrap">
          {posters.map((p, index) => (
            <div
              key={index}
              className="m-4 shadow-2xl rounded-md hover:cursor-pointer w-[15vw]"
            >
              <img src={p.poster} alt="" className=" rounded-t-md" />
              <h3 className="font-bold text-sm m-2 break-words w-[15vw]">
                {p.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Events;

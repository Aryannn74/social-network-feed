// src/pages/Landing.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-[#7f75e5] relative overflow-hidden font-sans">
      {/* Navbar */}
      <div className="bg-white flex justify-end items-center gap-3 px-4 py-3 shadow-md">
        <select className="border border-gray-300 rounded-lg px-2 py-1 text-sm outline-none">
          <option value="us">United States</option>
          <option value="in">India</option>
          <option value="uk">United Kingdom</option>
          <option value="ca">Canada</option>
          <option value="au">Australia</option>
        </select>

        <button
          onClick={() => navigate("/signup")}
          className="bg-black text-white px-5 py-2 rounded-full hover:opacity-90 transition"
        >
          Sign up
        </button>
      </div>

      {/* Left Background Shapes */}
      <div className="absolute left-6 top-32 flex flex-col gap-6 scale-75 md:scale-100">
        {/* Dot Grid */}
        <div className="grid grid-cols-4 gap-2">
          {Array.from({ length: 16 }).map((_, i) => (
            <div key={i} className="w-2.5 h-2.5 bg-white rounded-full"></div>
          ))}
        </div>

        {/* Triangles */}
        <div className="flex flex-col gap-2">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] 
                         border-l-transparent border-r-transparent border-b-white"
            ></div>
          ))}
        </div>
      </div>

      {/* Center Content */}
      <div className="flex flex-col justify-center items-center text-center min-h-[80vh] px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-3">
          Social Network
        </h1>
        <h3 className="text-lg md:text-xl font-medium text-white mb-4">
          Friends and Feed
        </h3>

        <p className="text-sm md:text-base text-white mb-1">
          Feed – Stay updated with posts and activities from your friends.
        </p>
        <p className="text-sm md:text-base text-white mb-8">
          Friends – Connect, manage, and explore your network.
        </p>

        <div className="flex gap-5 flex-wrap justify-center">
          <button
            onClick={() => navigate("/signup")}
            className="px-8 py-3 bg-black text-white rounded-full text-sm md:text-base hover:opacity-90 transition"
          >
            Sign up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 bg-white text-black rounded-full text-sm md:text-base hover:bg-gray-200 transition"
          >
            Login
          </button>
        </div>
      </div>

      {/* Orange Shape Bottom Right */}
      <div className="absolute bottom-0 right-0 w-44 h-44 md:w-72 md:h-72 
                      bg-orange-500 rounded-tl-[120px] md:rounded-tl-[180px]">
      </div>
    </div>
  );
}

// pages/Login.jsx
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      navigate("/feed"); // ✅ now matches App.jsx route
    } else {
      alert("Enter valid credentials!");
    }
  };

  return (
    <div className="w-full min-h-screen bg-[#7f75e5] flex justify-center items-center relative overflow-hidden">
      {/* Background Dots */}
      <div className="absolute left-6 top-8 grid grid-cols-4 gap-2 scale-75 md:scale-100">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-white rounded-full"></div>
        ))}
      </div>

      {/* Background Triangles */}
      <div className="absolute left-8 bottom-40 flex flex-col gap-2 scale-75 md:scale-100">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"
          ></div>
        ))}
      </div>

      {/* Orange Shape */}
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72 bg-orange-500 rounded-tl-[80px] md:rounded-tl-[150px]"></div>

      {/* Login Card */}
      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Login
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Welcome back! Please enter your details.
        </p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#7f75e5] text-white rounded-lg hover:bg-[#6a63d3] transition"
          >
            Login
          </button>
        </form>

        {/* Link to Sign Up */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-[#7f75e5] font-medium hover:underline"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

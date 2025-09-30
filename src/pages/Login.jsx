import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// 1. Move Firebase imports to the top
import { signInWithEmailAndPassword } from "firebase/auth"; 
import { auth } from "../firebase"; // Ensure this path is correct

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // State for potential error messages to show to the user
  const [error, setError] = useState(null); 

  const handleLogin = (e) => {
    e.preventDefault();
    setError(null); // Clear previous errors

    // 2. Insert Firebase logic here, where the form is submitted
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Login successful
        const user = userCredential.user;
        console.log("User logged in:", user);
        
        // Redirect on success
        navigate("/feed"); 
      })
      .catch(firebaseError => {
        // Handle any Firebase errors and show a user-friendly message
        console.error("Login error:", firebaseError.message);
        // Set the error state to display a message to the user
        setError("Login failed: " + firebaseError.message.replace("Firebase: Error (auth/", "").replace(").", ""));
      });
  };

  return (
    <div className="w-full min-h-screen bg-[#7f75e5] flex justify-center items-center relative overflow-hidden">
      {/* ... (Omitted Tailwind/UI code for brevity) ... */}

      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">Login</h2>
        <p className="text-center text-gray-500 mb-6 text-sm">Welcome back! Please enter your details.</p>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          {/* Display Error Message if it exists */}
          {error && (
            <div className="p-2 text-sm text-red-700 bg-red-100 rounded-lg text-center font-medium">
              {error}
            </div>
          )}

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

// 3. Removed unused imports and floating Firebase code from the end of the file.
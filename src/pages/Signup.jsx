import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom"; // Import Link for navigation
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase"; // make sure db is Firestore instance
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

const Signup = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "", // Added for design matching
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match!");
      setLoading(false);
      return;
    }

    try {
      const { displayName, email, password } = formData;

      // 1️⃣ Create user in Firebase Auth
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // 2️⃣ Update displayName in Firebase Auth
      await updateProfile(user, { displayName });

      // 3️⃣ Create user profile in Firestore
        await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        name: displayName,
        email: email,
        profilePicture: "",
        bio: "",
        createdAt: serverTimestamp(),
        lastLogin: serverTimestamp(),
        followersCount: 0,
        followingCount: 0,
        isOnline: true,
      });

      console.log("Signup successful!");
      navigate("/feed"); // Redirect to /feed or /dashboard
    } catch (err) {
      console.error("Signup error:", err);
      // Simplify error message for the user
      const message = err.message.replace("Firebase: Error (auth/", "").replace(").", "");
      setError(`Signup failed: ${message}`);
    }

    setLoading(false);
  };

  return (
    // ⭐️ Main container: full screen, purple background, centered content
    <div className="w-full min-h-screen bg-[#7f75e5] flex justify-center items-center relative overflow-hidden">
      
      {/* Background Shapes - Copied from your Login/Signup UI design */}
      <div className="absolute left-6 top-8 grid grid-cols-4 gap-2 scale-75 md:scale-100">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-2.5 h-2.5 bg-white rounded-full"></div>
        ))}
      </div>
      <div className="absolute left-8 bottom-40 flex flex-col gap-2 scale-75 md:scale-100">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[12px] border-l-transparent border-r-transparent border-b-white"
          ></div>
        ))}
      </div>
      <div className="absolute bottom-0 right-0 w-40 h-40 md:w-72 md:h-72 bg-orange-500 rounded-tl-[80px] md:rounded-tl-[150px]"></div>

      {/* ⭐️ Signup Card: centered, white background, shadow, rounded corners */}
      <div className="relative z-10 w-[90%] max-w-md bg-white rounded-2xl shadow-lg p-6 md:p-8">
        
        {/* Title and Subtitle */}
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Sign Up
        </h2>
        <p className="text-center text-gray-500 mb-6 text-sm">
          Join our community today!
        </p>

        {/* Error Display */}
        {error && (
          <div className="p-2 mb-4 text-sm text-red-700 bg-red-100 rounded-lg text-center font-medium">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          
          {/* Full Name Input */}
          <input
            type="text"
            name="displayName"
            placeholder="Full Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.displayName}
            onChange={handleChange}
            required
          />

          {/* Email Input */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.email}
            onChange={handleChange}
            required
          />

          {/* Password Input */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.password}
            onChange={handleChange}
            required
          />
          
          {/* Confirm Password Input (Added to match typical signup flow) */}
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            // Use the same purple button style as the Login form
            className={`w-full py-2 text-white rounded-lg transition ${
              loading ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#7f75e5] hover:bg-[#6a63d3]'
            }`}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Login */}
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#7f75e5] font-medium hover:underline"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
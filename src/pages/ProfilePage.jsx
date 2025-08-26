// src/pages/ProfilePage.jsx
import React from "react";

export default function ProfilePage() {
  const posts = Array(9).fill(null); // dummy posts

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm fixed top-0 left-0 w-full z-40">
        <h1 className="text-lg font-semibold">Profile</h1>
        <button className="text-xl hover:text-gray-700">⚙️</button>
      </header>

      <main className="flex-1 mt-14">
        {/* Profile Info */}
        <section className="p-4 bg-white shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <div>
              <h2 className="text-lg font-bold">Jeevan Reddy</h2>
              <p className="text-gray-600">@jeevan</p>
              <p className="text-sm mt-1">
                Frontend Developer | React Enthusiast 🚀
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="flex gap-6 mt-4 text-sm">
            <p>
              <span className="font-bold">216</span> Following
            </p>
            <p>
              <span className="font-bold">117</span> Followers
            </p>
          </div>
        </section>

        {/* Tabs */}
        <nav className="flex justify-around border-b bg-white mt-2">
          <button className="py-2 font-semibold text-blue-500 border-b-2 border-blue-500">
            Posts
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-500">
            Likes
          </button>
          <button className="py-2 text-gray-600 hover:text-blue-500">
            Saved
          </button>
        </nav>

        {/* Posts Grid */}
        <section className="grid grid-cols-3 gap-1 mt-1">
          {posts.map((_, i) => (
            <div
              key={i}
              className="w-full h-32 bg-gray-300 flex items-center justify-center hover:opacity-80 transition"
            >
              📸
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

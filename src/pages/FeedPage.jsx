// src/pages/FeedPage.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";

export default function FeedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  const stories = [
    { id: 1, name: "Your Story", isOwn: true },
    { id: 2, name: "User1" },
    { id: 3, name: "User2" },
    { id: 4, name: "User3" },
    { id: 5, name: "User4" },
    { id: 6, name: "User5" },
  ];

  const posts = [
    {
      id: 1,
      username: "just_bob33",
      time: "10 minutes ago",
      text: "Completed the design of signup, login and feed pages...",
      likes: "36.3k",
      comments: "1.3k",
      shares: "1.2k",
    },
    {
      id: 2,
      username: "sarah_21",
      time: "1 hour ago",
      text: "Loving this new social app clone 🚀",
      likes: "12.4k",
      comments: "800",
      shares: "650",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm">
        <button
          onClick={() => setSidebarOpen(true)}
          className="text-2xl font-bold focus:outline-none"
          aria-label="Open Sidebar"
        >
          ☰
        </button>
        <h1 className="text-lg font-semibold">Home</h1>
        <div className="flex gap-4">
          <button className="text-xl">🔔</button>
          <button className="text-xl">⚙️</button>
        </div>
      </header>

      {/* Stories */}
      <section className="flex gap-4 px-4 py-3 overflow-x-auto bg-white border-b">
        {stories.map((story) => (
          <div key={story.id} className="flex flex-col items-center">
            <div
              className={`w-16 h-16 rounded-full flex items-center justify-center border-4 ${
                story.isOwn ? "border-gray-400" : "border-red-400"
              }`}
            >
              <div className="w-14 h-14 bg-gray-300 rounded-full flex items-center justify-center">
                {story.id}
              </div>
            </div>
            <p className="text-xs mt-1">{story.name}</p>
          </div>
        ))}
      </section>

      {/* Posts */}
      <main className="flex flex-col gap-6 mt-4 px-2 md:px-6 flex-1 overflow-y-auto mb-16">
        {posts.map((post) => (
          <article
            key={post.id}
            className="bg-white rounded-xl shadow p-4 transition hover:shadow-md"
          >
            {/* Post Header */}
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-red-400"></div>
              <div>
                <p className="font-semibold">{post.username}</p>
                <p className="text-xs text-gray-500">@{post.username}</p>
              </div>
              <button className="ml-auto text-gray-500 hover:text-gray-700">
                ⋮
              </button>
            </div>

            {/* Post Media (placeholder) */}
            <div className="w-full h-64 bg-gray-300 rounded-lg mb-3"></div>

            {/* Post Actions */}
            <div className="flex justify-between text-sm text-gray-600">
              <p>❤️ {post.likes}</p>
              <p>💬 {post.comments}</p>
              <p>🔁 {post.shares}</p>
              <p>🔖 Save</p>
            </div>

            {/* Post Text */}
            <p className="text-sm mt-2 text-gray-700">{post.text}</p>

            {/* Comment Box */}
            <div className="flex items-center gap-2 mt-3">
              <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
              <input
                type="text"
                placeholder="Add a comment..."
                className="flex-1 border border-gray-300 rounded-full px-4 py-1 text-sm focus:outline-none"
              />
              <button>😊</button>
              <button>😂</button>
            </div>
          </article>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center py-2 text-xl z-20">
        <button onClick={() => navigate("/feed")}>🏠</button>
        <button onClick={() => navigate("/search")}>🔍</button>
        <button onClick={() => navigate("/create")}>➕</button>
        <button onClick={() => navigate("/likes")}>❤️</button>
        <button onClick={() => navigate("/profile")}>👤</button>
        <button onClick={() => navigate("/messages")}>✉️</button>
      </nav>

      {/* Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        toggleSidebar={() => setSidebarOpen(false)}
        active="Home"
      />
    </div>
  );
}

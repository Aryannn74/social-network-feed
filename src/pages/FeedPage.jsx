import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import PostForm from "./PostForm";

// Import icons from lucide-react
import { Home, Search, PlusSquare, Heart, User, MessageCircle } from "lucide-react";

export default function FeedPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  // Add a new post
  const addPost = (caption, image) => {
    const newPost = {
      id: Date.now(),
      username: "you",
      time: "Just now",
      text: caption,
      likes: "0",
      comments: "0",
      shares: "0",
      image: image || null,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  // Simulate other users posting
  useEffect(() => {
    const interval = setInterval(() => {
      const fakePosts = [
        {
          id: Date.now() + Math.random(),
          username: "friend123",
          time: "Just now",
          text: "Look at this amazing view! 🌄",
          likes: "5",
          comments: "2",
          shares: "1",
          image: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
        },
        {
          id: Date.now() + Math.random(),
          username: "user456",
          time: "Just now",
          text: "Check out this photo! 📸",
          likes: "8",
          comments: "3",
          shares: "2",
          image: `https://picsum.photos/400/300?random=${Math.floor(Math.random() * 1000)}`,
        },
      ];
      setPosts((prev) => [fakePosts[Math.floor(Math.random() * fakePosts.length)], ...prev]);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const stories = [
    { id: 1, name: "Your Story", isOwn: true },
    { id: 2, name: "User1" },
    { id: 3, name: "User2" },
    { id: 4, name: "User3" },
    { id: 5, name: "User4" },
    { id: 6, name: "User5" },
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

      {/* Feed & Posts */}
      <main className="flex flex-col gap-6 mt-4 px-2 md:px-6 flex-1 overflow-y-auto mb-16">
        <PostForm addPost={addPost} />

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
              <button className="ml-auto text-gray-500 hover:text-gray-700">⋮</button>
            </div>

            {/* Post Image */}
            {post.image && (
              <img
                src={post.image}
                alt="Post"
                className="w-full h-64 object-cover rounded-lg mb-3"
              />
            )}

            {/* Post Text */}
            <p className="text-sm mt-2 text-gray-700">{post.text}</p>

            {/* Post Actions */}
            <div className="flex justify-between text-sm text-gray-600 mt-2">
              <p>❤️ {post.likes}</p>
              <p>💬 {post.comments}</p>
              <p>🔁 {post.shares}</p>
              <p>🔖 Save</p>
            </div>
          </article>
        ))}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 w-full bg-white border-t flex justify-around items-center py-2 z-20">
        <button onClick={() => navigate("/feed")} className="flex flex-col items-center">
          <Home className="w-6 h-6" />
          <span className="text-xs">Home</span>
        </button>
        <button onClick={() => navigate("/search")} className="flex flex-col items-center">
          <Search className="w-6 h-6" />
          <span className="text-xs">Search</span>
        </button>
        <button onClick={() => navigate("/create")} className="flex flex-col items-center">
          <PlusSquare className="w-6 h-6" />
          <span className="text-xs">Create</span>
        </button>
        <button onClick={() => navigate("/likes")} className="flex flex-col items-center">
          <Heart className="w-6 h-6" />
          <span className="text-xs">Likes</span>
        </button>
        <button onClick={() => navigate("/profile")} className="flex flex-col items-center">
          <User className="w-6 h-6" />
          <span className="text-xs">Profile</span>
        </button>
        <button onClick={() => navigate("/messages")} className="flex flex-col items-center">
          <MessageCircle className="w-6 h-6" />
          <span className="text-xs">Messages</span>
        </button>
      </nav>

      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} toggleSidebar={() => setSidebarOpen(false)} active="Home" />
    </div>
  );
}

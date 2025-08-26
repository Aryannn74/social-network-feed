// src/pages/HomePage.jsx
import { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  Home,
  Search,
  PlusSquare,
  Heart,
  User,
  MessageCircle,
} from "lucide-react";

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);

  // toggle function
  const toggleSidebar = () => setIsOpen(!isOpen);

  const stories = [1, 2, 3, 4, 5];
  const posts = [1, 2, 3];

  return (
    <div className="relative min-h-screen flex flex-col bg-gray-50">
      {/* Sidebar */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />

      {/* Top bar */}
      <header className="fixed top-0 left-0 w-full bg-white shadow p-2 flex justify-between items-center z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 text-xl"
          aria-label="Open Sidebar"
        >
          ☰
        </button>
        <h1 className="font-bold text-lg">Home</h1>
        <div className="w-8" /> {/* spacer for symmetry */}
      </header>

      {/* Feed Section */}
      <main className="flex-1 overflow-y-auto px-4 mt-14 mb-16">
        {/* Stories */}
        <section className="flex gap-3 overflow-x-auto pb-3">
          {stories.map((s) => (
            <div key={s} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gray-300" />
              <p className="text-xs mt-1">User{s}</p>
            </div>
          ))}
        </section>

        {/* Posts */}
        <section className="space-y-4 mt-4">
          {posts.map((p) => (
            <article
              key={p}
              className="bg-white shadow rounded-xl p-4 flex flex-col gap-3 hover:shadow-md transition"
            >
              {/* User Info */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gray-300" />
                <div>
                  <p className="font-semibold">User{p}</p>
                  <p className="text-sm text-gray-500">@username{p}</p>
                </div>
              </div>

              {/* Caption */}
              <p>This is a sample post caption {p}.</p>

              {/* Image */}
              <div className="w-full h-48 bg-gray-200 rounded-xl"></div>

              {/* Actions */}
              <div className="flex justify-between text-gray-500 text-sm">
                <button className="hover:text-blue-500">💬 1.3k</button>
                <button className="hover:text-blue-500">🔁 500</button>
                <button className="hover:text-red-500">❤️ 1.2k</button>
                <button className="hover:text-green-500">📌 Save</button>
              </div>
            </article>
          ))}
        </section>
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-2 z-50">
        <button className="p-2 hover:text-blue-500">
          <Home size={26} />
        </button>
        <button className="p-2 hover:text-blue-500">
          <Search size={26} />
        </button>
        <button className="p-2 hover:text-blue-500">
          <PlusSquare size={26} />
        </button>
        <button className="p-2 hover:text-red-500">
          <Heart size={26} />
        </button>
        <button className="p-2 hover:text-blue-500">
          <User size={26} />
        </button>
        <button className="p-2 hover:text-blue-500">
          <MessageCircle size={26} />
        </button>
      </nav>
    </div>
  );
}

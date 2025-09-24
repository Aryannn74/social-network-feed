import React, { useState, useEffect } from "react";
import PostForm from "./PostForm";

export default function ProfilePage() {
  const [username, setUsername] = useState("Pixsellz");
  const [handle, setHandle] = useState("@Pixsellz");
  const [bio, setBio] = useState("Frontend Developer | React Enthusiast 🚀");
  const [posts, setPosts] = useState([]);
  const [stories, setStories] = useState([]);

  // Add new post dynamically
  const addPost = (caption, image) => {
    const newPost = {
      id: Date.now(),
      text: caption,
      image:
        image ||
        `https://picsum.photos/400/400?random=${Math.floor(Math.random() * 1000)}`,
    };
    setPosts([newPost, ...posts]);
  };

  // Initial dummy posts and stories
  useEffect(() => {
    const initialPosts = Array.from({ length: 9 }).map((_, i) => ({
      id: i,
      text: `Sample post #${i + 1}`,
      image: `https://picsum.photos/400/400?random=${i + 1}`,
    }));
    setPosts(initialPosts);

    const initialStories = Array.from({ length: 6 }).map((_, i) => ({
      id: i,
      name: `User${i + 1}`,
      image: `https://picsum.photos/100/100?random=${i + 10}`,
    }));
    setStories(initialStories);
  }, []);

  return (
    <div className="w-full min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center px-4 py-3 border-b bg-white shadow-sm fixed top-0 left-0 w-full z-40">
        <h1 className="text-lg font-semibold">Profile</h1>
        <button className="text-xl hover:text-gray-700">⚙️</button>
      </header>

      <main className="flex-1 mt-14 px-4">
        {/* Profile Info */}
        <section className="p-4 bg-white shadow-sm rounded-lg mb-4">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-300"></div>
            <div>
              <h2 className="text-lg font-bold">{username}</h2>
              <p className="text-gray-600">{handle}</p>
              <p className="text-sm mt-1">{bio}</p>
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

        {/* Story Section */}
        <section className="flex gap-4 overflow-x-auto bg-white p-2 rounded-lg shadow-sm mb-4">
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full border-2 border-red-400 overflow-hidden flex items-center justify-center">
                <img
                  src={story.image}
                  alt={story.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-xs mt-1">{story.name}</p>
            </div>
          ))}
        </section>

        {/* PostForm */}
        <div className="my-4">
          <PostForm addPost={addPost} />
        </div>

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
          {posts.map((post) => (
            <div
              key={post.id}
              className="relative w-full h-32 overflow-hidden group rounded-lg"
            >
              <img
                src={post.image}
                alt={post.text}
                className="w-full h-full object-cover group-hover:opacity-80 transition"
              />
              <div className="absolute inset-0 bg-black bg-opacity-25 flex items-center justify-center text-white text-xs opacity-0 group-hover:opacity-100 p-1 text-center">
                {post.text}
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

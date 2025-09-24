// src/pages/HomePage.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();

  // Dummy stories
  const stories = [
    { id: 1, name: "Your Story", type: "image", src: "https://placekitten.com/400/700" },
    { id: 2, name: "User1", type: "image", src: "https://placekitten.com/500/800" },
    { id: 3, name: "User2", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, name: "User3", type: "image", src: "https://placekitten.com/450/750" },
    { id: 5, name: "User4", type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 6, name: "User5", type: "image", src: "https://placekitten.com/420/720" },
  ];

  return (
    <div className="p-4 min-h-screen bg-gray-50">
      <h1 className="text-xl font-bold text-center mb-4">Home</h1>

      {/* Stories Row */}
      <div className="flex gap-4 overflow-x-auto py-4">
        {stories.map((story) => (
          <div
            key={story.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => navigate(`/story/${story.id}`)} // Navigate to StoryPage
          >
            <div className="w-16 h-16 rounded-full border-4 border-red-400 flex items-center justify-center overflow-hidden">
              <img
                src={`https://placekitten.com/50/50?image=${story.id}`} // Placeholder avatar
                alt={story.name}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs mt-1">{story.name}</p>
          </div>
        ))}
      </div>

      {/* Optional content below stories */}
      <div className="mt-8 text-center text-gray-500">
        <p>Click a story to view it full-screen like Instagram.</p>
      </div>
    </div>
  );
}

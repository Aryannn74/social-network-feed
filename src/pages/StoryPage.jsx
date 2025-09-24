import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function StoryPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const stories = [
    { id: 1, name: "Your Story", type: "image", src: "https://picsum.photos/id/237/400/700" },
    { id: 2, name: "User1", type: "image", src: "https://picsum.photos/id/238/500/800" },
    { id: 3, name: "User2", type: "video", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { id: 4, name: "User3", type: "image", src: "https://picsum.photos/id/239/450/750" },
    { id: 5, name: "User4", type: "video", src: "https://www.w3schools.com/html/movie.mp4" },
    { id: 6, name: "User5", type: "image", src: "https://picsum.photos/id/240/420/720" },
  ];

  const story = stories.find((s) => s.id === Number(id));

  if (!story) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-black text-white">
        Story not found
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center relative">
      {story.type === "image" ? (
        <img
          src={story.src}
          alt={story.name}
          className="max-h-full max-w-full object-contain"
        />
      ) : (
        <video
          src={story.src}
          autoPlay
          muted
          playsInline
          controls
          className="max-h-full max-w-full object-contain"
        />
      )}

      {/* User name */}
      <div className="absolute top-4 left-4 text-white font-semibold text-lg">
        {story.name}
      </div>

      {/* Close button */}
      <button
        onClick={() => navigate("/home")}
        className="absolute top-4 right-4 text-white text-2xl"
      >
        ✕
      </button>
    </div>
  );
}

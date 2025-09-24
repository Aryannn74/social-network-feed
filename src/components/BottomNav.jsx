// src/components/BottomNav.jsx
import React from "react";
import { Home, Search, SquarePlus, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BottomNav() {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-0 w-full flex justify-around items-center border-t bg-white py-2">
      <Home className="w-6 h-6 cursor-pointer" onClick={() => navigate("/feed")} />
      <Search className="w-6 h-6 cursor-pointer" onClick={() => navigate("/search")} />
      <SquarePlus className="w-6 h-6 cursor-pointer" onClick={() => navigate("/create")} />
      <MessageCircle className="w-6 h-6 cursor-pointer" onClick={() => navigate("/messages")} />
      <User className="w-6 h-6 cursor-pointer" onClick={() => navigate("/profile")} />
    </div>
  );
}

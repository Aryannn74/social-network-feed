import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function ChatPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  // dummy chat data
  const chats = {
    1: { name: "AzizDjan", messages: ["Hey!", "How are you?", "Let's meet soon!"] },
    2: { name: "Andrew Parker", messages: ["Hello 👋", "Thanks for accepting"] },
    3: { name: "Komol Kuchkarov", messages: ["Hi!", "Good to see you here!"] },
  };

  const chat = chats[id] || { name: "Unknown", messages: [] };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center px-4 py-3 border-b">
        <button onClick={() => navigate(-1)} className="text-xl mr-4">
          ←
        </button>
        <h1 className="text-lg font-semibold">{chat.name}</h1>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-4 overflow-y-auto">
        {chat.messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-xs ${
              index % 2 === 0 ? "bg-blue-100 self-start" : "bg-green-100 self-end"
            }`}
          >
            {msg}
          </div>
        ))}
      </div>

      {/* Input box */}
      <div className="p-3 border-t flex gap-2">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 border rounded-full px-4 py-2 text-sm focus:outline-none"
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded-full">Send</button>
      </div>
    </div>
  );
}

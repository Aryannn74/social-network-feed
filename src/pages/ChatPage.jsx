import React, { useState, useEffect } from "react";
import { Phone, Video, MoreVertical, Send } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ChatPage() {
  const location = useLocation();
  const chat = location.state || {
    name: "Unknown",
    img: "https://randomuser.me/api/portraits/men/10.jpg",
  };

  const [messages, setMessages] = useState([
    { sender: "other", text: "Hey, how are you?" },
  ]);
  const [input, setInput] = useState("");

  const botReply = (userMsg) => {
    const msg = userMsg.toLowerCase();
    if (msg.includes("hello") || msg.includes("hi")) {
      return "Hi there! How can I help you?";
    } else if (msg.includes("how are you")) {
      return "I’m just a bot, but I’m doing great! 😄";
    } else if (msg.includes("bye")) {
      return "Goodbye! Have a nice day 👋";
    } else {
      return "Sorry, I didn’t understand that. 🤔";
    }
  };

  const sendMessage = () => {
    if (input.trim() === "") return;
    const userMessage = { sender: "me", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Bot response after delay
    setTimeout(() => {
      const reply = botReply(input);
      setMessages((prev) => [...prev, { sender: "other", text: reply }]);
    }, 1000);
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b">
        <div className="flex items-center gap-3">
          <img
            src={chat.img}
            alt="profile"
            className="w-10 h-10 rounded-full"
          />
          <div>
            <h2 className="font-bold">{chat.name}</h2>
            <p className="text-xs text-green-500">Active now</p>
          </div>
        </div>
        <div className="flex gap-4">
          <Phone className="w-5 h-5" />
          <Video className="w-5 h-5" />
          <MoreVertical className="w-5 h-5" />
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${
              msg.sender === "me" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-2xl max-w-xs ${
                msg.sender === "me"
                  ? "bg-blue-500 text-white rounded-br-none"
                  : "bg-gray-200 text-black rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-3 border-t flex items-center gap-2">
        <input
          type="text"
          placeholder="Type a message"
          className="flex-1 bg-gray-100 rounded-full px-4 py-2 outline-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="p-2 bg-blue-500 rounded-full text-white"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

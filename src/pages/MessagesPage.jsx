import React from "react";
import { useNavigate } from "react-router-dom";

export default function Messages() {
  const navigate = useNavigate();

  const chats = [
    {
      id: 1,
      name: "AzizDjan",
      username: "@A_AzizDjan",
      lastMessage: "You’re very welcome AzizDjan!",
      date: "12/2/19",
    },
    {
      id: 2,
      name: "Andrew Parker",
      username: "@andrewww_",
      lastMessage: "You accepted the request",
      date: "12/1/19",
    },
    {
      id: 3,
      name: "Komol Kuchkarov",
      username: "@kuchkarov",
      lastMessage: "You accepted the request",
      date: "12/1/19",
    },
    {
      id: 4,
      name: "Karenne",
      username: "@karenne",
      lastMessage: "I would appreciate it if you could retweet this 🙏",
      date: "6/26/19",
    },
    {
      id: 5,
      name: "Maximillian",
      username: "@maxjacobson",
      lastMessage: "sent you a link: Hello Pixsellz",
      date: "5/22/19",
    },
    {
      id: 6,
      name: "Martha Craig",
      username: "@craig_love",
      lastMessage: "You: Just started 5 months ago",
      date: "12/2/19",
    },
    {
      id: 7,
      name: "Martin Randolph",
      username: "@martini_rond",
      lastMessage: "You accepted the request",
      date: "3/7/19",
    },
    {
      id: 8,
      name: "Kieron Dotson",
      username: "@kiero_d",
      lastMessage: "Hi Kiero, let me see what I can do for you...",
      date: "12/2/19",
    },
    {
      id: 9,
      name: "Zack John",
      username: "@zackjohn",
      lastMessage: "You accepted the request",
      date: "11/10/18",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b shadow-sm">
        <h1 className="text-lg font-semibold">Messages</h1>
        <button className="text-xl" onClick={() => navigate("/feed")}>
          ⬅️
        </button>
      </div>

      {/* Search */}
      <div className="px-4 py-3">
        <input
          type="text"
          placeholder="Search for people and groups"
          className="w-full border rounded-full px-4 py-2 text-sm bg-gray-100 focus:outline-none"
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 cursor-pointer border-b"
            onClick={() => navigate(`/chat/${chat.id}`)} // 👈 click → chat page
          >
            <div className="w-12 h-12 rounded-full bg-gray-300"></div>
            <div className="flex-1">
              <p className="font-semibold">{chat.name}</p>
              <p className="text-sm text-gray-500 truncate">{chat.lastMessage}</p>
            </div>
            <p className="text-xs text-gray-400">{chat.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

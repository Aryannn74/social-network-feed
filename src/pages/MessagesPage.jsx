import React from "react";
import { Search, Settings, Home, SquarePlus, MessageCircle, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function MessagesPage() {
  const navigate = useNavigate();

  const chats = [
    {
      id: 1,
      name: "AzizDjan",
      username: "@A_AzizDjan",
      lastMessage: "You're very welcome AzizDjan!",
      date: "12/2/19",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Andrew Parker",
      username: "@andrewww_",
      lastMessage: "You accepted the request",
      date: "12/1/19",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "Komol Kuchkarov",
      username: "@kuchkarov",
      lastMessage: "You accepted the request",
      date: "12/1/19",
      img: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 4,
      name: "Karenne",
      username: "@karenne",
      lastMessage: "I would appreciate it if you could retweet this 🙏",
      date: "6/26/19",
      img: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 5,
      name: "Maximillian",
      username: "@maxjacobson",
      lastMessage: "sent you a link: Hello Pixsellz",
      date: "5/22/19",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 6,
      name: "Martha Craig",
      username: "@craig_love",
      lastMessage: "You: Just started 5 months ago",
      date: "12/2/19",
      img: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    // ... you can add other chat items similarly
  ];

  return (
    <div className="w-full min-h-screen bg-white flex flex-col">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3 border-b">
        <h1 className="text-xl font-bold">Messages</h1>
        <div className="flex gap-4">
          <Search className="w-6 h-6" />
          <Settings className="w-6 h-6" />
        </div>
      </div>

      {/* Search Box */}
      <div className="p-3 border-b">
        <input
          type="text"
          placeholder="Search for people and groups"
          className="w-full bg-gray-100 rounded-full px-4 py-2 outline-none text-sm"
        />
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {chats.map((chat) => (
          <div
            key={chat.id}
            onClick={() => navigate(`/chat/${chat.id}`, { state: chat })}
            className="flex items-center justify-between px-4 py-3 border-b hover:bg-gray-50 cursor-pointer"
          >
            <div className="flex items-center gap-3">
              <img
                src={chat.img}
                alt={chat.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex flex-col">
                <div className="flex gap-2 items-center">
                  <span className="font-bold text-sm">{chat.name}</span>
                  <span className="text-gray-500 text-sm">{chat.username}</span>
                </div>
                <p className="text-sm text-gray-600 truncate max-w-[220px]">
                  {chat.lastMessage}
                </p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{chat.date}</span>
          </div>
        ))}
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 w-full flex justify-around items-center border-t bg-white py-2">
        <Home className="w-6 h-6 cursor-pointer" />
        <Search className="w-6 h-6 cursor-pointer" />
        <SquarePlus className="w-6 h-6 cursor-pointer" />
        <MessageCircle className="w-6 h-6 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}

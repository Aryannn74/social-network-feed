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
      message: "You: You're very welcome AzizDjan!",
      date: "12/2/19",
      img: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Andrew Parker",
      username: "@andrewww_",
      message: "You accepted the request",
      date: "12/1/19",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: 3,
      name: "Komol Kuchkarov",
      username: "@kuchkarov",
      message: "You accepted the request",
      date: "12/1/19",
      img: "https://randomuser.me/api/portraits/men/13.jpg",
    },
    {
      id: 4,
      name: "Karen Mne",
      username: "@karenmne",
      message: "You: Please retweet if you think it's worthy :)",
      date: "6/26/19",
      img: "https://randomuser.me/api/portraits/women/14.jpg",
    },
    {
      id: 5,
      name: "Maximillian",
      username: "@maxjacobson",
      message: "sent you a link: Hello Pxsellz,",
      date: "5/22/19",
      img: "https://randomuser.me/api/portraits/men/15.jpg",
    },
    {
      id: 6,
      name: "Martha Craig",
      username: "@craig_love",
      message: "You: Just started 5 months ago",
      date: "12/2/19",
      img: "https://randomuser.me/api/portraits/women/16.jpg",
    },
    {
      id: 7,
      name: "Martin Randolph",
      username: "@martini_rond",
      message: "You accepted the request",
      date: "3/7/19",
      img: "https://randomuser.me/api/portraits/men/17.jpg",
    },
    {
      id: 8,
      name: "Kieron Dotson",
      username: "@kiero_d",
      message: "You: Hi Kiero, I’ll get back to you soon.",
      date: "12/2/19",
      img: "https://randomuser.me/api/portraits/men/18.jpg",
    },
    {
      id: 9,
      name: "Zack John",
      username: "@zackjohn",
      message: "You accepted the request",
      date: "11/10/18",
      img: "https://randomuser.me/api/portraits/men/19.jpg",
    },
    {
      id: 10,
      name: "Sophia Turner",
      username: "@sophiat",
      message: "Hey! How’s your project going?",
      date: "1/5/20",
      img: "https://randomuser.me/api/portraits/women/20.jpg",
    },
    {
      id: 11,
      name: "Liam Johnson",
      username: "@liamj",
      message: "Cool! Let’s meet tomorrow.",
      date: "2/12/20",
      img: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      id: 12,
      name: "Emma Watson",
      username: "@emma_w",
      message: "Can you review my work?",
      date: "3/14/20",
      img: "https://randomuser.me/api/portraits/women/22.jpg",
    },
    {
      id: 13,
      name: "Noah Brown",
      username: "@noah_b",
      message: "Thanks for the help!",
      date: "4/1/20",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
    },
    {
      id: 14,
      name: "Olivia Davis",
      username: "@oliviad",
      message: "You: Sure, I’ll check it out.",
      date: "5/9/20",
      img: "https://randomuser.me/api/portraits/women/24.jpg",
    },
    {
      id: 15,
      name: "Ethan Smith",
      username: "@ethans",
      message: "Let’s start the project today.",
      date: "6/11/20",
      img: "https://randomuser.me/api/portraits/men/25.jpg",
    },
    {
      id: 16,
      name: "Ava Johnson",
      username: "@avaj",
      message: "Okay, I’ll do that.",
      date: "7/4/20",
      img: "https://randomuser.me/api/portraits/women/26.jpg",
    },
    {
      id: 17,
      name: "William Lee",
      username: "@willlee",
      message: "Let’s schedule a meeting.",
      date: "8/19/20",
      img: "https://randomuser.me/api/portraits/men/27.jpg",
    },
    {
      id: 18,
      name: "Isabella Wilson",
      username: "@isabellaw",
      message: "That’s awesome! Congrats 🎉",
      date: "9/23/20",
      img: "https://randomuser.me/api/portraits/women/28.jpg",
    },
    {
      id: 19,
      name: "James White",
      username: "@jamesw",
      message: "See you at the event!",
      date: "10/30/20",
      img: "https://randomuser.me/api/portraits/men/29.jpg",
    },
    {
      id: 20,
      name: "Mia Thomas",
      username: "@miat",
      message: "Please share the details.",
      date: "11/15/20",
      img: "https://randomuser.me/api/portraits/women/30.jpg",
    },
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
                  {chat.message}
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

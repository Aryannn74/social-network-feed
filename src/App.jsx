import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import FeedPage from "./pages/FeedPage";
import MessagesPage from "./pages/MessagesPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage";
import HomePage from "./pages/HomePage";
import StoryPage from "./pages/StoryPage";

const SearchPage = () => <div className="p-6">🔍 Search Page</div>;
const LikesPage = () => <div className="p-6">❤️ Likes Page</div>;
const CreatePage = () => <div className="p-6">➕ Create Post Page</div>;

export default function App() {
  return (
    <Routes>
      {/* Landing + Auth */}
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      {/* Main Pages */}
      <Route path="/home" element={<HomePage />} />
      <Route path="/feed" element={<FeedPage />} />
      <Route path="/messages" element={<MessagesPage />} />
      <Route path="/chat/:id" element={<ChatPage />} />
      <Route path="/profile" element={<ProfilePage />} />

      {/* Story Viewer */}
      <Route path="/story/:id" element={<StoryPage />} />

      {/* Extras */}
      <Route path="/search" element={<SearchPage />} />
      <Route path="/likes" element={<LikesPage />} />
      <Route path="/create" element={<CreatePage />} />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

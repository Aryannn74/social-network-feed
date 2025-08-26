import { FaUser, FaList, FaHashtag, FaBookmark, FaBolt } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { IoClose } from "react-icons/io5";

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <>
      {/* Overlay (click outside to close) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-full w-[320px] sm:w-[350px] bg-white shadow-lg transform transition-transform duration-300 z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-4 flex items-center justify-between">
          {/* Avatar/logo */}
          <img
            src="https://randomuser.me/api/portraits/lego/1.jpg"
            alt="logo"
            className="w-12 h-12 rounded-full"
          />

          {/* Close button */}
          <button onClick={toggleSidebar} className="text-gray-600">
            <IoClose size={28} />
          </button>
        </div>

        {/* User Info */}
        <div className="px-4">
          <h2 className="font-bold text-lg">Pixsellz</h2>
          <p className="text-gray-500">@pixsellz</p>
          <div className="flex space-x-4 mt-2 text-sm">
            <span><b>216</b> Following</span>
            <span><b>117</b> Followers</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="mt-6 px-4 space-y-4 text-gray-700">
          <div className="flex items-center space-x-3">
            <FaUser /> <span>Profile</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaList /> <span>Lists</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaHashtag /> <span>Topics</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaBookmark /> <span>Bookmarks</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaBolt /> <span>Moments</span>
          </div>
        </nav>
      </aside>
    </>
  );
}

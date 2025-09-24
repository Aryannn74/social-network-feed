import React, { useState } from "react";

const PostForm = ({ addPost }) => {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");

  const handleCaptionChange = (e) => {
    setCaption(e.target.value);
    if (e.target.value.trim() !== "") setError("");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (caption.trim() === "") {
      setError("Caption is required!");
      return;
    }

    addPost(caption, preview); // Add post to feed
    setCaption("");
    setImage(null);
    setPreview(null);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded-lg shadow">
      <h2 className="font-semibold mb-2">Create Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={caption}
          onChange={handleCaptionChange}
          placeholder="Write something..."
          className="w-full border rounded px-3 py-2 mb-2 focus:outline-none"
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input type="file" accept="image/*" onChange={handleImageChange} />
        {preview && (
          <img src={preview} alt="Preview" className="mt-2 w-full rounded" />
        )}
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;

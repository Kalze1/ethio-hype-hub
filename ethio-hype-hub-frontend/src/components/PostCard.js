// src/components/PostCard.js
import React from 'react';

function PostCard({ post }) {
  // Ensure the image URL is correctly formed
  const imageUrl = `http://127.0.0.1:8000${post.image}`;

  return (
    <div className="bg-white rounded-lg overflow-hidden  shadow-lg transform hover:scale-105 transition-transform duration-300">
      {/* Image Wrapper */}
      <div className="relative group">
        {/* Image */}
        <img
          src={imageUrl}
          alt={post.creator}
          className="w-full h-auto object-contain"
        />

        {/* Hover Overlay for Buttons */}
        <div className="absolute inset-0 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Download Button at the Top-Right */}
          <div className="flex justify-end p-2">
            <button className="bg-blue-500 text-white text-sm px-3 py-1 rounded hover:bg-blue-600 transition-colors">
              ⬇ Download
            </button>
          </div>

          {/* Like and Comment Buttons at the Bottom */}
          <div className="flex justify-around p-2 bg-black bg-opacity-60">
            <button className="bg-green-500 text-white text-sm px-4 py-1 rounded hover:bg-green-600 transition-colors">
              ❤️ Like
            </button>
            <button className="bg-yellow-500 text-white text-sm px-4 py-1 rounded hover:bg-yellow-600 transition-colors">
              💬 Comment
            </button>
          </div>
        </div>
      </div>

      {/* Post Details - Always Visible */}
      <div className="p-4 h-auto">
        <p className="text-gray-800 font-semibold mb-1">{post.creator}</p>
        <p className="text-gray-600 text-sm">{post.title || 'No caption provided'}</p>
      </div>
    </div>
  );
}

export default PostCard;

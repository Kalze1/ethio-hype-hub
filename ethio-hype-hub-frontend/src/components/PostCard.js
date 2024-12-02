import React from "react";

function PostCard({ post }) {
  return (
    <div className="relative w-64 bg-gray-100 rounded-lg overflow-hidden shadow-md">
      {/* Image Wrapper */}
      <div className="relative group">
        {/* Image */}
        <img
          src={post.image}
          alt={post.username}
          className="w-full h-48 object-cover"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {/* Download Button */}
          <div className="flex justify-end p-2">
            <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
              Download
            </button>
          </div>

          {/* Like and Comment Buttons */}
          <div className="flex space-x-4 mb-2 justify-center">
            <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
              Like
            </button>
            <button className="bg-gray-700 text-white text-sm px-3 py-1 rounded hover:bg-gray-600">
              Comment
            </button>
          </div>
        </div>
      </div>

      {/* Creator Name */}
      <div className="p-2 text-center text-gray-800 font-semibold">
        {post.username}
      </div>
    </div>
  );
}

export default PostCard;
